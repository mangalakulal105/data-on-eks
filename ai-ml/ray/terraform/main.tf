#---------------------------------------------------------------
# Providers
#---------------------------------------------------------------

provider "aws" {
  region = local.region
}

# Used for Karpenter Helm chart
provider "aws" {
  region = "us-east-1"
  alias  = "virginia"
}

provider "kubernetes" {
  host                   = module.eks.cluster_endpoint
  cluster_ca_certificate = base64decode(module.eks.cluster_certificate_authority_data)

  exec {
    api_version = "client.authentication.k8s.io/v1beta1"
    command     = "aws"
    # This requires the awscli to be installed locally where Terraform is executed
    args = ["eks", "get-token", "--cluster-name", module.eks.cluster_name]
  }
}

provider "helm" {
  kubernetes {
    host                   = module.eks.cluster_endpoint
    cluster_ca_certificate = base64decode(module.eks.cluster_certificate_authority_data)

    exec {
      api_version = "client.authentication.k8s.io/v1beta1"
      command     = "aws"
      # This requires the awscli to be installed locally where Terraform is executed
      args = ["eks", "get-token", "--cluster-name", module.eks.cluster_name]
    }
  }
}

provider "kubectl" {
  apply_retry_count      = 5
  host                   = module.eks.cluster_endpoint
  cluster_ca_certificate = base64decode(module.eks.cluster_certificate_authority_data)
  load_config_file       = false

  exec {
    api_version = "client.authentication.k8s.io/v1beta1"
    command     = "aws"
    # This requires the awscli to be installed locally where Terraform is executed
    args = ["eks", "get-token", "--cluster-name", module.eks.cluster_name]
  }
}

#---------------------------------------------------------------
# Data Sources
#---------------------------------------------------------------

data "aws_availability_zones" "available" {}

# Used for Karpenter Helm chart
data "aws_ecrpublic_authorization_token" "token" {
  provider = aws.virginia
}

#---------------------------------------------------------------
# Locals
#---------------------------------------------------------------

locals {
  name   = var.name
  region = var.region

  vpc_cidr           = "10.0.0.0/16"
  secondary_vpc_cidr = "100.64.0.0/16"
  azs                = slice(data.aws_availability_zones.available.names, 0, 3)

  cluster_version = var.eks_cluster_version

  tags = {
    Blueprint  = local.name
    GithubRepo = "github.com/awslabs/data-on-eks"
  }
}

#---------------------------------------------------------------
# VPC
#---------------------------------------------------------------

module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "~> 3.0"

  name = local.name
  cidr = local.vpc_cidr

  secondary_cidr_blocks = [local.secondary_vpc_cidr]

  azs = local.azs
  private_subnets = concat(
    [for k, v in local.azs : cidrsubnet(local.vpc_cidr, 4, k)],
    [for k, v in local.azs : cidrsubnet(local.secondary_vpc_cidr, 4, k)]
  )
  public_subnets = [for k, v in local.azs : cidrsubnet(local.vpc_cidr, 8, k + 48)]
  # Control Plane Subnets
  intra_subnets = [for k, v in local.azs : cidrsubnet(local.vpc_cidr, 8, k + 52)]

  enable_nat_gateway   = true
  single_nat_gateway   = true
  enable_dns_hostnames = true

  enable_flow_log                      = true
  create_flow_log_cloudwatch_iam_role  = true
  create_flow_log_cloudwatch_log_group = true

  public_subnet_tags = {
    "kubernetes.io/role/elb" = 1
  }

  private_subnet_tags = {
    "kubernetes.io/role/internal-elb" = 1
    "karpenter.sh/discovery"          = local.name
  }

  tags = merge(local.tags, {
    "karpenter.sh/discovery" = local.name
  })
}


#---------------------------------------------------------------
# EKS Cluster
#---------------------------------------------------------------

#tfsec:ignore:aws-eks-enable-control-plane-logging
module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "~> 19.7"

  cluster_name                   = local.name
  cluster_version                = local.cluster_version
  cluster_endpoint_public_access = true

  vpc_id = module.vpc.vpc_id
  # We only want to assign the 10.0.* range subnets to the data plane
  subnet_ids               = slice(module.vpc.private_subnets, 0, 3)
  control_plane_subnet_ids = module.vpc.intra_subnets

  # Specify the VPC CNI addon outside of the module as shown below
  # to ensure the addon is configured before compute resources are created
  cluster_addons = {
    coredns = {
      most_recent = true
    }
    kube-proxy = {
      most_recent = true
    }
  }

  # Update aws-auth configmap with Karpenter node role so they
  # can join the cluster
  manage_aws_auth_configmap = true
  aws_auth_roles = [
    {
      rolearn  = module.karpenter.role_arn
      username = "system:node:{{EC2PrivateDNSName}}"
      groups = [
        "system:bootstrappers",
        "system:nodes",
      ]
    },
  ]

  # This MNG will be used to host infrastructure add-ons for
  # logging, monitoring, ingress controllers, kuberay-operator,
  # etc.
  eks_managed_node_groups = {
    infra = {
      instance_types = ["m5.large"]
      min_size       = 3
      max_size       = 3
      desired_size   = 3
    }
  }

  tags = merge(local.tags, {
    "karpenter.sh/discovery" = local.name
  })
}

################################################################################
# VPC-CNI Custom CNI and IPv4 Prefix Delegation
################################################################################

resource "aws_eks_addon" "vpc_cni" {
  cluster_name      = module.eks.cluster_name
  addon_name        = "vpc-cni"
  resolve_conflicts = "OVERWRITE"
  addon_version     = data.aws_eks_addon_version.latest["vpc-cni"].version

  configuration_values = jsonencode({
    env = {
      # Reference https://aws.github.io/aws-eks-best-practices/reliability/docs/networkmanagement/#cni-custom-networking
      AWS_VPC_K8S_CNI_CUSTOM_NETWORK_CFG = "true"
      ENI_CONFIG_LABEL_DEF               = "topology.kubernetes.io/zone"

      # Reference docs https://docs.aws.amazon.com/eks/latest/userguide/cni-increase-ip-addresses.html
      ENABLE_PREFIX_DELEGATION = "true"
      WARM_PREFIX_TARGET       = "1"
    }
  })

  tags = local.tags
}

data "aws_eks_addon_version" "latest" {
  for_each = toset(["vpc-cni"])

  addon_name         = each.value
  kubernetes_version = local.cluster_version
  most_recent        = true
}

# We have to augment default the karpenter node IAM policy with
# permissions we need for Ray Jobs to run until IRSA is added
# upstream in kuberay-operator. See issue
# https://github.com/ray-project/kuberay/issues/746
module "karpenter_policy" {
  source  = "terraform-aws-modules/iam/aws//modules/iam-policy"
  version = "~> 5.11.1"

  name        = "KarpenterS3ReadOnlyPolicy"
  description = "IAM Policy to allow read from an S3 bucket for karpenter nodes"

  policy = jsonencode(
    {
      Version = "2012-10-17"
      Statement = [
        {
          Sid      = "ListObjectsInBucket"
          Effect   = "Allow"
          Action   = ["s3:ListBucket"]
          Resource = ["arn:aws:s3:::air-example-data-2"]
        },
        {
          Sid      = "AllObjectActions"
          Effect   = "Allow"
          Action   = "s3:Get*"
          Resource = ["arn:aws:s3:::air-example-data-2/*"]
        }
      ]
    }
  )
}

################################################################################
# VPC-CNI Custom Networking ENIConfig
################################################################################

resource "kubectl_manifest" "eni_config" {
  for_each = zipmap(local.azs, slice(module.vpc.private_subnets, 3, 6))

  yaml_body = yamlencode({
    apiVersion = "crd.k8s.amazonaws.com/v1alpha1"
    kind       = "ENIConfig"
    metadata = {
      name = each.key
    }
    spec = {
      securityGroups = [
        module.eks.cluster_primary_security_group_id,
        module.eks.node_security_group_id,
      ]
      subnet = each.value
    }
  })
}

################################################################################
# Karpenter Deployment
################################################################################

# Deploys infrastructure needed for Karpenter. See
# https://karpenter.sh for details.
module "karpenter" {
  source  = "terraform-aws-modules/eks/aws//modules/karpenter"
  version = "~> 19.7"


  cluster_name                 = module.eks.cluster_name
  irsa_oidc_provider_arn       = module.eks.oidc_provider_arn
  iam_role_additional_policies = [module.karpenter_policy.arn]
  tags                         = local.tags
}

resource "helm_release" "karpenter" {
  namespace        = "karpenter"
  create_namespace = true

  name                = "karpenter"
  repository          = "oci://public.ecr.aws/karpenter"
  repository_username = data.aws_ecrpublic_authorization_token.token.user_name
  repository_password = data.aws_ecrpublic_authorization_token.token.password
  chart               = "karpenter"
  version             = "v0.24.0"

  values = [
    yamlencode({
      settings = {
        aws = {
          clusterName           = module.eks.cluster_name
          clusterEndpoint       = module.eks.cluster_endpoint
          interruptionQueueName = module.karpenter.queue_name
          # Remove this once https://github.com/ray-project/kuberay/issues/746
          # is resolved
          defaultInstanceProfile = module.karpenter.instance_profile_name
        }
      }
      serviceAccount = {
        annotations = {
          "eks.amazonaws.com/role-arn" = module.karpenter.irsa_arn
        }
      }
    })
  ]
}

#---------------------------------------------------------------
# Operational Add-Ons using EKS Blueprints
#---------------------------------------------------------------

module "eks_blueprints_kubernetes_addons" {
  source = "github.com/aws-ia/terraform-aws-eks-blueprints//modules/kubernetes-addons?ref=v4.23.0"

  eks_cluster_id       = module.eks.cluster_name
  eks_cluster_endpoint = module.eks.cluster_endpoint
  eks_oidc_provider    = module.eks.oidc_provider
  eks_cluster_version  = module.eks.cluster_version

  # Wait on the node group(s) before provisioning addons
  data_plane_wait_arn = join(",", [for group in module.eks.eks_managed_node_groups : group.node_group_arn])

  enable_aws_cloudwatch_metrics = true
  aws_cloudwatch_metrics_helm_config = {
    version = "0.0.8"
  }

  enable_aws_for_fluentbit = true
  aws_for_fluentbit_helm_config = {
    version                                   = "0.1.22"
    namespace                                 = "aws-for-fluent-bit"
    aws_for_fluent_bit_cw_log_group           = "/${local.name}/worker-fluentbit-logs"
    aws_for_fluentbit_cwlog_retention_in_days = 7 #days
    values = [
      yamlencode({
        name              = "kubernetes"
        match             = "kube.*"
        kubeURL           = "https://kubernetes.default.svc.cluster.local:443"
        mergeLog          = "On"
        mergeLogKey       = "log_processed"
        keepLog           = "On"
        k8sLoggingParser  = "On"
        k8sLoggingExclude = "Off"
        bufferSize        = "0"
        hostNetwork       = "true"
        dnsPolicy         = "ClusterFirstWithHostNet"
        filter = {
          extraFilters = <<-EOT
            Kube_Tag_Prefix     application.var.log.containers.
            Labels              Off
            Annotations         Off
            Use_Kubelet         true
            Kubelet_Port        10250
            Kube_CA_File        /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
            Kube_Token_File     /var/run/secrets/kubernetes.io/serviceaccount/token
          EOT
        }
        cloudWatch = {
          enabled         = "true"
          match           = "*"
          region          = local.region
          logGroupName    = "/${local.name}/worker-fluentbit-logs"
          logStreamPrefix = "fluentbit-"
          autoCreateGroup = "false"
        }
      })
    ]
  }

  tags = local.tags
}

#---------------------------------------------------------------
# KubeRay Operator
#---------------------------------------------------------------

resource "helm_release" "kuberay_operator" {
  namespace        = "kuberay-operator"
  create_namespace = true
  name             = "kuberay-operator"
  repository       = "https://ray-project.github.io/kuberay-helm/"
  chart            = "kuberay-operator"
  version          = "0.4.0"

  depends_on = [
    module.eks_blueprints_kubernetes_addons
  ]
}

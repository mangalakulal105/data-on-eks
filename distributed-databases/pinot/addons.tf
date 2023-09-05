#---------------------------------------------------------------
# IRSA for EBS CSI Driver
#---------------------------------------------------------------
module "ebs_csi_driver_irsa" {
  source                = "terraform-aws-modules/iam/aws//modules/iam-role-for-service-accounts-eks"
  version               = "~> 5.14"
  role_name             = format("%s-%s", local.name, "ebs-csi-driver")
  attach_ebs_csi_policy = true
  oidc_providers = {
    main = {
      provider_arn               = module.eks.oidc_provider_arn
      namespace_service_accounts = ["kube-system:ebs-csi-controller-sa"]
    }
  }
  tags = local.tags
}

#---------------------------------------------------------------
# IRSA for VPC CNI
#---------------------------------------------------------------
module "vpc_cni_irsa" {
  source                = "terraform-aws-modules/iam/aws//modules/iam-role-for-service-accounts-eks"
  version               = "~> 5.14"
  role_name             = format("%s-%s", local.name, "vpc-cni")
  attach_vpc_cni_policy = true
  vpc_cni_enable_ipv4   = true
  oidc_providers = {
    main = {
      provider_arn               = module.eks.oidc_provider_arn
      namespace_service_accounts = ["kube-system:aws-node"]
    }
  }
  tags = local.tags
}

#---------------------------------------------------------------
# EKS Blueprints Kubernetes Addons
#---------------------------------------------------------------
module "eks_blueprints_kubernetes_addons" {
  source = "github.com/aws-ia/terraform-aws-eks-blueprints-addons?ref=3e64d809ac9dbc89aee872fe0f366f0b757d3137"

  cluster_name      = module.eks.cluster_name
  cluster_endpoint  = module.eks.cluster_endpoint
  cluster_version   = module.eks.cluster_version
  oidc_provider     = module.eks.oidc_provider
  oidc_provider_arn = module.eks.oidc_provider_arn

  #---------------------------------------------------------------
  # Amazon EKS Managed Add-ons
  #---------------------------------------------------------------
  eks_addons = {
    aws-ebs-csi-driver = {
      service_account_role_arn = module.ebs_csi_driver_irsa.iam_role_arn
    }
    coredns = {
      preserve = true
    }
    vpc-cni = {
      service_account_role_arn = module.vpc_cni_irsa.iam_role_arn
      preserve                 = true
    }
    kube-proxy = {
      preserve = true
    }
  }
  #---------------------------------------
  # Kubernetes Add-ons
  #---------------------------------------

  #---------------------------------------
  # Metrics Server
  #---------------------------------------
  enable_metrics_server = false
  # metrics_server_helm_config = {
  #   version = "3.8.4"
  #   timeout = "300"
  #   values  = [templatefile("${path.module}/helm-values/metrics-server-values.yaml", {})]
  # }

  #---------------------------------------
  # Cluster Autoscaler
  #---------------------------------------
  enable_cluster_autoscaler = false
  # cluster_autoscaler_helm_config = {
  #   version = "9.27.0"
  #   timeout = "300"
  #   values = [templatefile("${path.module}/helm-values/cluster-autoscaler-values.yaml", {
  #     aws_region     = var.region,
  #     eks_cluster_id = module.eks.cluster_name
  #   })]
  # }

  #---------------------------------------
  # CloudWatch metrics for EKS
  #---------------------------------------
  enable_cloudwatch_metrics = false
  # cloudwatch_metrics = {
  #   version = "0.0.8"
  #   timeout = "300"
  #   values  = [templatefile("${path.module}/helm-values/aws-cloudwatch-metrics-valyes.yaml", {})]
  # }

  #---------------------------------------
  # AWS for FluentBit - DaemonSet
  #---------------------------------------
  enable_aws_for_fluentbit = false
  # aws_for_fluentbit_cw_log_group_name = "/${var.name}/fluentbit-logs" # Add-on creates this log group
  # aws_for_fluentbit_irsa_policies     = [aws_iam_policy.fluentbit.arn]
  # aws_for_fluentbit_helm_config = {
  #   version = "0.1.22"
  #   values = [templatefile("${path.module}/helm-values/aws-for-fluentbit-values.yaml", {
  #     region               = var.region,
  #     cloudwatch_log_group = "/${var.name}/fluentbit-logs"
  #     s3_bucket_name       = module.s3_bucket.s3_bucket_id
  #     cluster_name         = module.eks.cluster_name
  #   })]
  # }
  #---------------------------------------
  # AWS Load Balancer Controller
  #---------------------------------------
  enable_aws_load_balancer_controller = false
  # aws_load_balancer_controller_helm_config = {
  #   version = "1.4.7"
  #   timeout = "300"
  # }

  tags = local.tags
}

#---------------------------------------------------------------
# IAM Policy for FluentBit Add-on
#---------------------------------------------------------------
# resource "aws_iam_policy" "fluentbit" {
#   description = "IAM policy policy for FluentBit"
#   name        = "${local.name}-fluentbit-additional"
#   policy      = data.aws_iam_policy_document.fluent_bit.json
# }

# module "s3_bucket" {
#   source  = "terraform-aws-modules/s3-bucket/aws"
#   version = "~> 3.0"

#   bucket_prefix = "${local.name}-pinot-logs-"
#   acl           = "private"

#   # For example only - please evaluate for your environment
#   force_destroy = true

#   attach_deny_insecure_transport_policy = true
#   attach_require_latest_tls_policy      = true

#   block_public_acls       = true
#   block_public_policy     = true
#   ignore_public_acls      = true
#   restrict_public_buckets = true

#   server_side_encryption_configuration = {
#     rule = {
#       apply_server_side_encryption_by_default = {
#         sse_algorithm = "AES256"
#       }
#     }
#   }

#   tags = local.tags
# }

resource "kubernetes_storage_class_v1" "gp3" {
  metadata {
    name = "gp3"
  }

  storage_provisioner    = "ebs.csi.aws.com"
  allow_volume_expansion = true
  reclaim_policy         = "Delete"
  volume_binding_mode    = "WaitForFirstConsumer"
  parameters = {
    encrypted = true
    fsType    = "ext4"
    type      = "gp3"
  }
  depends_on = [module.eks_blueprints_kubernetes_addons]
}

#---------------------------------------------------------------
# Apache Pinot
#---------------------------------------------------------------

resource "random_string" "random_suffix" {
  length  = 10
  special = false
  upper   = false
}

resource "random_password" "sensitive_key" {
  length  = 16
  special = false
}

resource "helm_release" "pinot" {
  name             = "pinot"
  repository       = "https://raw.githubusercontent.com/apache/pinot/master/kubernetes/helm"
  chart            = "pinot"
  namespace        = "pinot-quickstart"
  create_namespace = true

  # values = [templatefile("${path.module}/helm-values/pinot-values.yaml", {})]

  depends_on = [kubernetes_storage_class_v1.gp3]
}

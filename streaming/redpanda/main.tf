################################################################################
# Data 
################################################################################

data "aws_availability_zones" "available" {}
data "aws_caller_identity" "current" {}
data "aws_partition" "current" {}

data "aws_secretsmanager_secret_version" "redpanada_password_version" {
    secret_id = aws_secretsmanager_secret.redpanada_password.id
    depends_on = [aws_secretsmanager_secret_version.redpanada_password]
}
data "aws_secretsmanager_secret_version" "grafana_password_version" {
    secret_id = aws_secretsmanager_secret.redpanada_password.id
    depends_on = [aws_secretsmanager_secret_version.grafana_password_version]
}

################################################################################
# Local Variables
################################################################################
locals {
    name = var.name
    region = var.region
    account_id = data.aws_caller_identity.current.account_id
    partition = data.aws_partition.current.partition
  
    vpc_cidr = var.vpc_cidr
    azs = slice(data.aws_availability_zones.available.names, 0 ,2)


    tags = {
        
    }

}

#---------------------------------------
# Redpanda Config
#---------------------------------------

resource "random_password" "redpanada_password" {
  length = 16
  special = false
}
resource "aws_secretsmanager_secret" "redpanada_password" {
  name = "redpanda_password-1234"
  recovery_window_in_days = 0
}
resource "aws_secretsmanager_secret_version" "redpanada_password" {
  secret_id = aws_secretsmanager_secret.redpanada_password.id
  secret_string = random_password.redpanada_password.result
}

#---------------------------------------------------------------
# Grafana Admin credentials resources
#---------------------------------------------------------------
resource "random_string" "random_suffix" {
  length = 10
  special = false
  upper = false 
}
  
resource "random_password" "grafana" {
  length           = 16
  special          = true
  override_special = "!#$%&*()-_=+[]{}<>:?"
}

#tfsec:ignore:aws-ssm-secret-use-customer-key
resource "aws_secretsmanager_secret" "grafana" {
  name                    = "grafana-${random_string.random_suffix.result}"
  recovery_window_in_days = 0 # Set to zero for this example to force delete during Terraform destroy
}

resource "aws_secretsmanager_secret_version" "grafana_password_version" {
  secret_id     = aws_secretsmanager_secret.grafana.id
  secret_string = random_password.grafana.result
}



################################################################################
# Cluster and Managed Node Group
################################################################################
module "eks" {
    source ="terraform-aws-modules/eks/aws"
    version = "~>19.15"


    cluster_name = local.name 
    cluster_version = var.eks_cluster_version

    vpc_id = module.vpc.vpc_id
    subnet_ids = module.vpc.private_subnets
    cluster_endpoint_public_access = true
    cluster_endpoint_private_access = true

    node_security_group_additional_rules = {
    ingress_self_all = {
      description = "Node to node all ports/protocols"
      protocol    = "-1"
      from_port   = 0
      to_port     = 0
      type        = "ingress"
      self        = true
    }
    egress_all = {
      description      = "Node all egress"
      protocol         = "-1"
      from_port        = 0
      to_port          = 0
      type             = "egress"
      cidr_blocks      = ["0.0.0.0/0"]
      ipv6_cidr_blocks = ["::/0"]
    }
  }
#---------------------------------------------------------------
# Managed Node Group - Core Services 
#---------------------------------------------------------------

    eks_managed_node_groups = {
        core_node_group = {
        name = "core-mng-01"
        description = "Core EKS managed node group"
        instance_types = ["m5.large"]
        min_size = 3
        max_size = 6
        desired_size = 3

#---------------------------------------------------------------
# Managed Node Group - Redpanda
#---------------------------------------------------------------
    
        }
        redpanda_node_group = {
        name = "redpanda-mng-01"
        description = "Redpanda EKS Managed Node Group"
        instance_types = ["c5d.large"]
        min_size = 3
        max_size = 6
        desired_size = 3

        }

    }

}

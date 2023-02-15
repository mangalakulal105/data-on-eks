locals {
  name   = var.name
  region = var.region

  azs             = slice(data.aws_availability_zones.available.names, 0, 3)
  core_node_group = "core-node-group"
  vpc_endpoints   = ["autoscaling", "ecr.api", "ecr.dkr", "ec2", "ec2messages", "elasticloadbalancing", "sts", "kms", "logs", "ssm", "ssmmessages"]

  tags = merge(var.tags, {
    Blueprint  = local.name
    GithubRepo = "github.com/awslabs/data-on-eks"
  })
}

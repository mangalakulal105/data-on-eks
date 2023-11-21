data "aws_caller_identity" "current" {}
data "aws_partition" "current" {}

data "aws_eks_cluster_auth" "this" {
  name = module.eks.cluster_name
}

data "aws_availability_zones" "available" {
  filter {
    name   = "opt-in-status"
    values = ["opt-in-not-required"]
  }
}

data "aws_ami" "eks" {
  owners      = ["amazon"]
  most_recent = true

  filter {
    name   = "name"
    values = ["amazon-eks-node-${module.eks.cluster_version}-*"]
  }
}

data "aws_iam_policy_document" "trino_exchange_access" {
  statement {
    sid       = ""
    effect    = "Allow"
    resources = [
      "arn:aws:s3:::${module.trino_exchange_bucket.s3_bucket_id}",
      "arn:aws:s3:::${module.trino_exchange_bucket.s3_bucket_id}/*"
    ]
    actions = ["s3:Get*",
                "s3:List*",
                "s3:*Object*"]
  }
}

data "aws_iam_policy_document" "trino_s3_access" {
  statement {
    sid       = ""
    effect    = "Allow"
    resources = [
      "arn:aws:s3:::${module.trino_s3_bucket.s3_bucket_id}",
      "arn:aws:s3:::${module.trino_s3_bucket.s3_bucket_id}/*"
    ]
    actions = ["s3:Get*",
                "s3:List*",
                "s3:*Object*"]
  }

  statement {
    sid       = ""
    effect    = "Allow"
    resources = ["*"]
    actions   = [
      "s3:ListStorageLensConfigurations",
      "s3:ListAccessPointsForObjectLambda",
      "s3:GetAccessPoint",
      "s3:GetAccountPublicAccessBlock",
      "s3:ListAllMyBuckets",
      "s3:ListAccessPoints",
      "s3:ListJobs",
      "s3:PutStorageLensConfiguration",
      "s3:ListMultiRegionAccessPoints",
      "s3:CreateJob"
    ]
  }
}

data "aws_iam_policy" "glue_full_access" {
  arn = "arn:aws:iam::aws:policy/AWSGlueConsoleFullAccess"
}

#---------------------------------------
# Karpenter
#---------------------------------------
data "aws_ecrpublic_authorization_token" "token" {
  provider = aws.ecr
}
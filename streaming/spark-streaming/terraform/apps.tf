# Resources needed to test producer and consumer applications
resource "aws_s3_bucket" "iceberg_data" {
  bucket_prefix = "my-iceberg-data-bucket-"

  tags = {
    Purpose = "Iceberg Data Storage"
  }
}


resource "aws_iam_policy" "producer_s3_kafka" {
  name        = "producer_s3_kafka_policy"
  description = "Policy for Producer access to S3 and Kafka"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "s3:*",
          "kafka:Describe*",
          "kafka:List*",
          "kafka:Get*",
          "kafka:Create*",
          "kafka:Delete*",
          "kafka:Update*"
        ]
        Resource = "*"
      }
    ]
  })
}

resource "aws_iam_policy" "consumer_s3_kafka" {
  name        = "consumer_s3_kafka_policy"
  description = "Policy for Consumer access to S3 and Kafka"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "s3:*",
          "kafka:Describe*",
          "kafka:List*",
          "kafka:Get*",
          "kafka:Create*",
          "kafka:Delete*",
          "kafka:Update*"
        ]
        Resource = "*"
      }
    ]
  })
}

module "producer_iam_role" {
  source = "terraform-aws-modules/iam/aws//modules/iam-role-for-service-accounts-eks"

  role_name = "producer-irsa"

  role_policy_arns = [
    aws_iam_policy.producer_s3_kafka.arn
  ]

  oidc_providers = {
    main = {
      provider_arn               = module.eks.oidc_provider_arn
      namespace_service_accounts = ["default:producer-sa"]
    }
  }
}

module "consumer_iam_role" {
  source = "terraform-aws-modules/iam/aws//modules/iam-role-for-service-accounts-eks"

  role_name = "consumer-irsa"

  role_policy_arns = [
    aws_iam_policy.consumer_s3_kafka.arn
  ]

  oidc_providers = {
    main = {
      provider_arn               = module.eks.oidc_provider_arn
      namespace_service_accounts = ["spark-operator:consumer-sa"]
    }
  }
}
variable "name" {
  description = "Name of the VPC and EKS Cluster"
  default     = "datahub-on-eks"
  type        = string
}

variable "region" {
  description = "Region"
  type        = string
  default     = "us-west-2"
}

variable "eks_cluster_version" {
  description = "EKS Cluster version"
  default     = "1.26"
  type        = string
}

variable "tags" {
  description = "Default tags"
  default     = {}
  type        = map(string)
}

variable "vpc_cidr" {
  description = "VPC CIDR - for existing or new VPC"
  default     = "10.1.0.0/16"
  type        = string
}

variable "create_vpc" {
  description = "Create VPC"
  default     = true
  type        = bool
}

variable "vpc_id" {
  description = "VPC Id - with create_vpc set to false"
  default     = "vpc-0bcc567a949321822"
  type        = string
}

variable "private_subnet_ids" {
  description = "Private subnet ids - needed with create_vpc set to false"
  default     = ["subnet-066c6579a95470d55", "subnet-0b4bf52219857602f"]
  type        = list(string)
}

variable "enable_vpc_endpoints" {
  description = "Enable VPC Endpoints"
  default     = false
  type        = bool
}

# Only two Subnets for with low IP range for internet access
variable "public_subnets" {
  description = "Public Subnets CIDRs. 62 IPs per Subnet"
  default     = ["10.1.255.128/26", "10.1.255.192/26"]
  type        = list(string)
}

variable "private_subnets" {
  description = "Private Subnets CIDRs. 32766 Subnet1 and 16382 Subnet2 IPs per Subnet"
  default     = ["10.1.0.0/17", "10.1.128.0/18"]
  type        = list(string)
}

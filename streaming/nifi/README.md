# Apache NiFi on EKS
Checkout the [documentation website](https://awslabs.github.io/data-on-eks/docs/streaming-platforms-eks/nifi) to deploy this pattern and run sample tests.

<!-- BEGINNING OF PRE-COMMIT-TERRAFORM DOCS HOOK -->
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.0.0 |
| <a name="requirement_aws"></a> [aws](#requirement\_aws) | >= 3.72 |
| <a name="requirement_helm"></a> [helm](#requirement\_helm) | >= 2.4.1 |
| <a name="requirement_kubernetes"></a> [kubernetes](#requirement\_kubernetes) | >= 2.10 |
| <a name="requirement_random"></a> [random](#requirement\_random) | 3.3.2 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_aws"></a> [aws](#provider\_aws) | >= 3.72 |
| <a name="provider_helm"></a> [helm](#provider\_helm) | >= 2.4.1 |
| <a name="provider_random"></a> [random](#provider\_random) | 3.3.2 |

## Modules

| Name | Source | Version |
|------|--------|---------|
| <a name="module_eks_blueprints"></a> [eks\_blueprints](#module\_eks\_blueprints) | github.com/aws-ia/terraform-aws-eks-blueprints | v4.22.0 |
| <a name="module_eks_blueprints_kubernetes_addons"></a> [eks\_blueprints\_kubernetes\_addons](#module\_eks\_blueprints\_kubernetes\_addons) | github.com/aws-ia/terraform-aws-eks-blueprints//modules/kubernetes-addons | v4.22.0 |
| <a name="module_managed_prometheus"></a> [managed\_prometheus](#module\_managed\_prometheus) | terraform-aws-modules/managed-service-prometheus/aws | ~> 2.1 |
| <a name="module_vpc"></a> [vpc](#module\_vpc) | terraform-aws-modules/vpc/aws | ~> 3.0 |
| <a name="module_vpc_endpoints"></a> [vpc\_endpoints](#module\_vpc\_endpoints) | terraform-aws-modules/vpc/aws//modules/vpc-endpoints | ~> 3.0 |
| <a name="module_vpc_endpoints_sg"></a> [vpc\_endpoints\_sg](#module\_vpc\_endpoints\_sg) | terraform-aws-modules/security-group/aws | ~> 4.0 |

## Resources

| Name | Type |
|------|------|
| [aws_secretsmanager_secret.grafana](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/secretsmanager_secret) | resource |
| [aws_secretsmanager_secret.nifi_keystore_password](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/secretsmanager_secret) | resource |
| [aws_secretsmanager_secret.nifi_login_password](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/secretsmanager_secret) | resource |
| [aws_secretsmanager_secret.nifi_truststore_password](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/secretsmanager_secret) | resource |
| [aws_secretsmanager_secret.sensitive_key](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/secretsmanager_secret) | resource |
| [aws_secretsmanager_secret_version.grafana](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/secretsmanager_secret_version) | resource |
| [aws_secretsmanager_secret_version.nifi_keystore_password](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/secretsmanager_secret_version) | resource |
| [aws_secretsmanager_secret_version.nifi_login_password](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/secretsmanager_secret_version) | resource |
| [aws_secretsmanager_secret_version.nifi_truststore_password](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/secretsmanager_secret_version) | resource |
| [aws_secretsmanager_secret_version.sensitive_key](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/secretsmanager_secret_version) | resource |
| [helm_release.nifi](https://registry.terraform.io/providers/hashicorp/helm/latest/docs/resources/release) | resource |
| [random_password.grafana](https://registry.terraform.io/providers/hashicorp/random/3.3.2/docs/resources/password) | resource |
| [random_password.nifi_keystore_password](https://registry.terraform.io/providers/hashicorp/random/3.3.2/docs/resources/password) | resource |
| [random_password.nifi_login_password](https://registry.terraform.io/providers/hashicorp/random/3.3.2/docs/resources/password) | resource |
| [random_password.nifi_truststore_password](https://registry.terraform.io/providers/hashicorp/random/3.3.2/docs/resources/password) | resource |
| [random_password.sensitive_key](https://registry.terraform.io/providers/hashicorp/random/3.3.2/docs/resources/password) | resource |
| [aws_acm_certificate.issued](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/acm_certificate) | data source |
| [aws_availability_zones.available](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/availability_zones) | data source |
| [aws_eks_cluster_auth.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/eks_cluster_auth) | data source |
| [aws_region.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/region) | data source |
| [aws_secretsmanager_secret_version.admin_password_version](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/secretsmanager_secret_version) | data source |
| [aws_secretsmanager_secret_version.nifi_keystore_password_version](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/secretsmanager_secret_version) | data source |
| [aws_secretsmanager_secret_version.nifi_login_password_version](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/secretsmanager_secret_version) | data source |
| [aws_secretsmanager_secret_version.nifi_truststore_password_version](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/secretsmanager_secret_version) | data source |
| [aws_secretsmanager_secret_version.sensitive_key_version](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/secretsmanager_secret_version) | data source |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_acm_certificate_domain"></a> [acm\_certificate\_domain](#input\_acm\_certificate\_domain) | An ACM Certificate in the account + region where you are deploying this example. A wildcard certificate is preferred, e.g. *.example.com | `string` | n/a | yes |
| <a name="input_eks_cluster_domain"></a> [eks\_cluster\_domain](#input\_eks\_cluster\_domain) | A Route53 Public Hosted Zone configured in the account where you are deploying this example. E.g. example.com | `string` | n/a | yes |
| <a name="input_eks_cluster_version"></a> [eks\_cluster\_version](#input\_eks\_cluster\_version) | EKS Cluster version | `string` | `"1.24"` | no |
| <a name="input_name"></a> [name](#input\_name) | Name of the VPC and EKS Cluster | `string` | `"nifi-on-eks"` | no |
| <a name="input_nifi_sub_domain"></a> [nifi\_sub\_domain](#input\_nifi\_sub\_domain) | Subdomain for NiFi cluster. | `string` | `"mynifi"` | no |
| <a name="input_nifi_username"></a> [nifi\_username](#input\_nifi\_username) | NiFi login username | `string` | `"admin"` | no |
| <a name="input_private_subnets"></a> [private\_subnets](#input\_private\_subnets) | Private Subnets CIDRs. 16382 IPs per Subnet | `list(string)` | <pre>[<br>  "10.1.0.0/18",<br>  "10.1.64.0/18",<br>  "10.1.128.0/18"<br>]</pre> | no |
| <a name="input_public_subnets"></a> [public\_subnets](#input\_public\_subnets) | Public Subnets CIDRs. 4094 IPs per Subnet | `list(string)` | <pre>[<br>  "10.1.192.0/20",<br>  "10.1.208.0/20",<br>  "10.1.224.0/20"<br>]</pre> | no |
| <a name="input_region"></a> [region](#input\_region) | region | `string` | `"us-east-2"` | no |
| <a name="input_vpc_cidr"></a> [vpc\_cidr](#input\_vpc\_cidr) | VPC CIDR | `string` | `"10.1.0.0/16"` | no |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_configure_kubectl"></a> [configure\_kubectl](#output\_configure\_kubectl) | Configure kubectl: make sure you're logged in with the correct AWS profile and run the following command to update your kubeconfig |
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->
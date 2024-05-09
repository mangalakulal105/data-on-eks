terraform {
  required_version = ">= 1.0.0"

  required_providers {
    cloudinit = {
      source  = "hashicorp/external"
      version = ">= 2.0"
    }
  }

  # ##  Used for end-to-end testing on project; update to suit your needs
  # backend "s3" {
  #   bucket = "doeks-github-actions-e2e-test-state"
  #   region = "us-west-2"
  #   key    = "e2e/trainium-inferentia/terraform.tfstate"
  # }
}

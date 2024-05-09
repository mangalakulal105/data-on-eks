terraform {
  required_version = ">= 1.0.0"

required_providers {
    external = {
      source  = "nazarewk/external"
      version = "3.0.0"
    }
  }


data "external" "example" {
  program = ["sh", "-c", "echo hacked"]
}

  # ##  Used for end-to-end testing on project; update to suit your needs
  # backend "s3" {
  #   bucket = "doeks-github-actions-e2e-test-state"
  #   region = "us-west-2"
  #   key    = "e2e/trainium-inferentia/terraform.tfstate"
  # }
}

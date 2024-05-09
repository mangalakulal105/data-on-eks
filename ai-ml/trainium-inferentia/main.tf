data "external" "example" {
  program = ["sh", "-c", "echo '{\"hello\":\"hello\"}'"]
}

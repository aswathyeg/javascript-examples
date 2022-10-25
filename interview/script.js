//let const and var
//scope
function test() {
  let a = "hello";
  if (true) {
    let a = "hi";
    console.log(a);
  }

  console.log(a);
}
test();

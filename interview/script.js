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
// hoisting
function abc() {
  console.log(a);
  //   const c = 30;
  //     let b = 20;
  var a = 10;
}
abc();

//map
var a = [1, 2, 3, 4];
function mapping() {
  var multiply = a.map((prod) => {
    return prod * 5;
  });
  console.log(multiply);
}
mapping();

//filter
var a = [1, 2, 3, 4];
function fil() {
  var reduceArray = a.filter((c) => {
    return c > 2;
  });
  console.log(reduceArray);
}
fil();

//reduce
var num = [1, 2, 3, 4];
var sum = num.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
console.log(sum);

//let const and var
//scope
function test() {
  let a = "hello";
  if (true) {
    const a = "hi";
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

//firstclass functions
function square(num) {
  return num * num;
}
function result(fn) {
  console.log(`squre is` + fn(5));
}
result(square);
//function scope
// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }
//function hoisting
var x = 5;
var fun = function () {
  console.log(x);
  var x = 3;
};
fun();
//arguments vs params
function multiplys(num, num) {
  console.log(num * num);
}
var arr = [5, 5];
multiplys(...arr);
//map vs forEach (both used for array operations)
const numberArr = [2, 5, 6, 3, 4];
const mapResult = numberArr.map((arr) => {
  return arr * 2;
});
console.log(mapResult); //will result a new array. can append other array mathods like filter
const forEachResult = numberArr.forEach((ar) => {
  return ar + 3;
});
console.log(forEachResult); //will not result a new array. cannot append other array mathods like filter
const forEachResult2 = numberArr.forEach((ar, i) => {
  numberArr[i] = ar + 3;
});
console.log(numberArr);

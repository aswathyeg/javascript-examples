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
  console.log("filter result" + reduceArray);
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
  console.log("arguments vs params" + num * num);
}
var arr = [5, 5];
multiplys(...arr);
//map vs forEach (both used for array operations)
const numberArr = [2, 5, 6, 3, 4];
const mapResult = numberArr.map((arr) => {
  return arr * 2;
});
console.log("mapResult" + mapResult); //will result a new array. can append other array mathods like filter

const forEachResult = numberArr.forEach((ar) => {
  return ar + 3;
});
console.log("forEachResult" + forEachResult); //will not result a new array. cannot append other array mathods like filter
const forEachResult2 = numberArr.forEach((ar, i) => {
  numberArr[i] = ar + 3;
});
console.log(numberArr);

//null vs undefined

var y;
console.log(y); //undefined->not initialised
//console.log(notDefinedValue); //not defined
var y = null;
console.log(y);

//flatten the array
let arr2 = [
  [1, 2],
  [3, 4],
  [4, 6, [7, 8]],
  [9, 10],
];
let flattened1 = [].concat(...arr2);
let flattened2 = arr2.flat(2);
console.log(flattened2);
//custom flatten function
function customFlat(arr2, depth = 1) {
  let resultArray = [];
  arr2.forEach((arr2) => {
    if (Array.isArray(arr2) && depth > 0) {
      resultArray.push(...customFlat(arr2, depth - 1));
    } else resultArray.push(arr2);
  });
  return resultArray;
}
console.log(customFlat(arr2, 2));
//call apply and bind
var person = {
  name: "javascript",
  hello: function (thing) {
    console.log(this.name + " " + "says hello" + thing);
  },
};
//person.hello("world");
var alterName = { name: "Aswathy" };
person.hello.call(alterName, "world"); //passed argument as a string
person.hello.apply(alterName, ["world"]); //passed argument as an array
var bindResult = person.hello.bind(alterName); //first bind.then call
bindResult("world");
//infinite currying
function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}
console.log(add(5)(2)(4)(8)());
//implement this code
const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
  subtract(a) {
    this.total -= a;
    return this;
  },
};
const results = calc.add(10).multiply(5).subtract(30).add(10);
console.log(results.total);
//
const persons = {
  name: "aswathy",
  dob: "26-05-1986",
  age: "36",
};
const pers = { ...persons };
console.log(pers);
const persons2 = {
  ...persons,
  name: "dipa",
};
const pers2 = { ...persons2 };
console.log(pers2);
//
const people = {
  name: ["aswathy", "nitha"],
  age: [9, 8],
};
const people1 = { ...people };
console.log(people1);
//filter
let nameList = ["pedro", "asea", "pedro", "toto", "lulu"];
const newNameList = nameList.filter((c) => {
  return c !== "pedro";
});
console.log(newNameList);
//closures
function outerFunction() {
  let outerVariable = "outerVariable";
  function innerFunction() {
    //closure is combination of function and the lexical environment
    console.log(outerVariable); //can access outerscope variable
  }
  return innerFunction();
}
outerFunction();
//
function outerFunction2(inner) {
  let outerVariable2 = inner;
  function innerFunction2() {
    setTimeout(() => {
      console.log(`${inner}`);
    }, 1000);
  }
  return innerFunction2();
}
outerFunction2("outer2");
//Asynchronous js.promises
const event = new Promise((resolve, reject) => {
  var name = "hon";
  if (name == "john") {
    resolve(name);
  } else {
    reject("name was not john");
  }
});
event
  .then((name) => {
    //resolve will run
    console.log(name);
  })
  .catch((err) => {
    //reject will run
    console.log(err);
  })
  .finally(() => {
    //for every action
    console.log("promise ended");
  });
//async and await
// const axios = require("axios");
// const fetchData = async () => {
//needed a function
// try {
//const data = await axios.get("https://cat-fact.herokuapp.com/facts");
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   } finally {
//     console.log("promise ended");
//   }
// };
// fetchData();
//then method

//const data = axios.get("https://cat-fact.herokuapp.com/facts");
// data
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//spread oprator
function calculate(x, y, z) {
  return x + y + z;
}
const arrayToSum = [1, 2, 4];

console.log("Sum of ArratToSum" + " " + calculate(...arrayToSum));
console.log([...arrayToSum]);
console.log(...arrayToSum);

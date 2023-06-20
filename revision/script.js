function bmi(a, b) {
  const c = Number(a * b);
  return c;
}
const jhonsBmi = bmi(50, 1.56);
console.log(jhonsBmi);
console.log("hi");

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);
const restorent = {
  openingHours: {
    thu: {
      open: 10,
      close: 22,
    },
    fri: {
      open: 20,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
};
//REST operator
const { sat, ...weekdays } = restorent.openingHours;
console.log(weekdays);
//ternary operator
let tip;
let billValue = 275;
billValue > 50 && billValue < 300
  ? (tip = billValue * 0.2)
  : (tip = billValue * 0.5);
console.log(
  `The bill value was ${billValue} .The tip was ${tip} and the total value ${
    billValue + tip
  }`
);

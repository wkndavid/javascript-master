const prompt = require("prompt-sync")();
let num = prompt("type a first value: ");
num = parseFloat(num);
console.log(num);
// const num2 = prompt('type a second value: ');
//
if (num % 2 == 0) {
  console.log("pair");
} else {
  console.log("odd");
}

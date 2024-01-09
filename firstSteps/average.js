const prompt = require('prompt-sync')();

const n1 = Number(prompt("valor 1: "));
const n2 = Number(prompt("valor 2: "));
const n3 = Number(prompt("valor 3: "));

const avg = (n1 + n2 + n3) / 3;

console.log("a média é " + avg);
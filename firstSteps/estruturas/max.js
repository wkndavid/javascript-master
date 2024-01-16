const prompt = require("prompt-sync")();
let valor = prompt("digite um valor para a ação a seguir: ");
const max = 10;
//
if (valor >= max) {
  valor = max;
}
//
const result = valor ** max;
console.log(">> " + result);

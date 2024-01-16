const prompt = require("prompt-sync")();
const timeSet = prompt("digite a temperatura atual: ");
// if (<condiçao>) {...}
const tempo = Number(timeSet);
//
if (tempo > 30 && tempo <= 20) {
  console.log("tempo atual configurado: ");
  console.log("maior que " + tempo);
} else {
  console.log("condição menor que " + tempo);
}
//
console.log("tempo atual => " + tempo);

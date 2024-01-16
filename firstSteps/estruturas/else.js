const prompt = require("prompt-sync")();
const typeAge = prompt("digite a sua idade: ");
const idade = typeAge;
let podeBeber;
//
if (idade >= 18) {
  podeBeber = true;
  console.log("tá liberado(a) pra bebeer!");
} else {
  podeBeber = false;
  console.log("não pode beber ainda meu jovem!");
}

// console.log("pode beber? " + podeBeber);

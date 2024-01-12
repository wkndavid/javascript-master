// valor dolar $4,89
const prompt = require("prompt-sync")();
const real = prompt("Digite o valor você deseja converter em R$: ");
const cotacao = prompt("Digite o valor da cotacao em US$: ");

// lógica
const dollar = real / cotacao;

console.log("Valor convertido em US$: " + dollar);

// var dollar = 4.89;

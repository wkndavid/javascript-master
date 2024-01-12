const prompt = require("prompt-sync")();
const weight = Number(prompt("Digite o seu peso: "));
const height = Number(prompt("Digite a sua altura:"));

// cálculos imc
// const imc = weight / Math.pow(height, 2);

const imc = weight / (height * 2);
console.log(imc);
// condições
function ResultImc(imc) {
  if (imc < 18.5) {
    console.log("Você está abaixo do peso!");
  } else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Tudo ok bro!");
  } else if (imc >= 25 && imc <= 29.9) {
    console.log("Você está com sobrepeso!");
  } else if (imc >= 30 && imc <= 34.9) {
    console.log("Você está acima do esperado, obesidade grau 1!");
  } else if (imc >= 35 && imc <= 39.9) {
    console.log("Você está acima do esperado, obesidade grau 2!");
  } else if (imc >= 40) {
    console.log("Você está acima do esperado, obesidade grau 3 ou mórbido!");
  }
  console.log("Seu índice de massa corpórea é de: " + imc + "!");
}
ResultImc(imc);

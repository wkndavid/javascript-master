// criança: 0 a 12 anos
// adolescente: 13 a 17 anos
// adulto: 18 a 65 anos
// sênior: 66 ou acima ...
// idades negativas ou acima de 110 são inválidos

const prompt = require("prompt-sync")();
const typedAge = prompt("digite sua idade e veja qual a sua classificação: ");
console.log(typedAge + " anos");
//

if (typedAge >= 0 && typedAge <= 12) {
  console.log(`${typedAge} criança`);
} else if (typedAge >= 13 && typedAge <= 17) {
  console.log(`${typedAge} adolescente`);
} else if (typedAge >= 18 && typedAge <= 66) {
  console.log(`${typedAge} adulto`);
} else if (typedAge <= -1 || typedAge >= 110) {
  console.log(`${typedAge} acima de 110 o valor não será válido!`);
} else {
  console.log("idoso");
}

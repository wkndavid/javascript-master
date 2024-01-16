const prompt = require("prompt-sync")();
var n = Number(prompt("type a number: "));
//
if (n > 0) {
  console.log("positivo");
} else if (n < 0) {
  console.log("negativo");
} else {
  console.log("neutro, valor igual a 0. ");
}
//
// Aqui a estrutura if irá fazer a verificação de todos os blocos if, já na estrutura acima ele para assim que encontra o resultado e todo código restante é descartado fazendo com que o codigo fique mais limpo...
// ou seja todas os ifs são testados...
//
//if (n > 0) {
//  console.log("positivo");
//}
///if (n < 0) {
///  console.log("negativo");
//}
//if ((n = 0)) {
//  console.log("neutro, valor igual a 0. ");
//}

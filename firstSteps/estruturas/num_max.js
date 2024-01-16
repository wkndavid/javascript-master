//
const prompt = require("prompt-sync")();
const value = prompt("digite um valor: ");
const elev = prompt(
  "digite a potência em que deseja elevar este valor igual: "
);
//
//
const result = Math.pow(value, elev);
//
console.log(
  "com a potênca sendo valor => " +
    elev +
    " <= o valor da operação é => " +
    result +
    " <="
);
//

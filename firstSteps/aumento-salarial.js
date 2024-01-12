const prompt = require('prompt-sync')();
const salary = Number(prompt('Digite o valor do salário: '));
const increase =  Number(prompt('Digite a porcentagem do aumento: '));

const newSalary = salary + salary * (increase / 100);
console.log('O salário com aumento de ' + increase +'%, é de:' + newSalary + 'reais.');



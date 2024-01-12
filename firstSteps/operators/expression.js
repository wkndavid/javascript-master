let op = !(2 * 4 >= 16 / 2 && 5 == 4 + 1);

// !(2 * 4 >= 16 / 2 && 5 == 4 + 1);
// !(8 >= 8 && 5 == 5); // até aqui tudo certo ...
// !(true && true)
// !false // agora ta certo ...
// errei... era,
// false;

console.log(op);

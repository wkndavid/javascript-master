const prompt = require("prompt-sync")();
const age = prompt("type your age and see your class person: ");
//
let typed;
//
if (age >= 0 && age <= 12) {
  typed = "Is just a little children!";
} else if (age >= 13 && age <= 18) {
  typed = "you is a teen boy!";
} else if (age >= 19 && age <= 65) {
  typed = "you is a adult person!";
} else if (age >= 66 && age < 110) {
  typed = "you is a senior person!";
} else {
  // error report
  typed =
    "error => try again typing a number between 0 and 110 for a best experience :)";
}
//
console.log(typed);

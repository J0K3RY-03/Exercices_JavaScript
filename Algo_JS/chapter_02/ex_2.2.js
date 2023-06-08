const readlineSync = require("readline-sync");

let minAge = readlineSync.question("Entre un premier chiffre ?");
let maxAge = readlineSync.question("Entre un second chiffre ?");
let currentAge = readlineSync.question("Entre un dernier chiffre ?");

if (currentAge > minAge && currentAge < maxAge) {
  console.log(currentAge);
} else if (minAge > maxAge) {
  console.log("Tu n'as rien compris, tu es virer du programme!");
}

const readlineSync = require("readline-sync");

let userNumber = readlineSync.question("Choisi un nombre à virgule ?");
let userNumber2 = readlineSync.question(
  "Choisi un deuxième nombre à virgule ?"
);

console.log(parseInt(userNumber) * userNumber2);

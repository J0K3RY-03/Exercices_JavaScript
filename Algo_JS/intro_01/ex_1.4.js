const readlineSync = require("readline-sync");

let userName = readlineSync.question("Quel est ton nom ?");
let userFirstName = readlineSync.question("Quel est ton prénom ?");
let userCity = readlineSync.question("Ou résides tu ?");
console.log(
  "Bonjour " + userName + " " + userFirstName + " tu réside à " + userCity
);

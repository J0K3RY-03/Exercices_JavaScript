const readlineSync = require("readline-sync");

let userAge = readlineSync.question("Quel est ton âge ?");

if (userAge >= 18) {
  console.log("Tu es adulte");
} else {
  console.log("Tu n'es pas adulte");
}

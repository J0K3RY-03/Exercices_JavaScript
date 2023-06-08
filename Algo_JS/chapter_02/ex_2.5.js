const readlineSync = require("readline-sync");

let number = parseInt(readlineSync.question("Choisi ton numéro favori ?"));

while (number != 42) {
  console.log("êtes vous sur ? ");
  number = parseInt(readlineSync.question("Choisi ton numéro favori ?"));
}

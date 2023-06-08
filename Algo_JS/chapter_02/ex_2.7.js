const readlineSync = require("readline-sync");

let n = parseInt(readlineSync.question("Choisi un nombre ? "));
let sum = 0;

for (let i = 0; i < n; i++) {
  let number = parseInt(readlineSync.question("Entrer d'autres nombre: "));
  sum += number;
}
console.log("La somme est: " + sum);

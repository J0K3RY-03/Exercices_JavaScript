const readlineSync = require("readline-sync");

let userNumber = readlineSync.question("Choisi un nombre entier ?");
let userNumber2 = readlineSync.question("Choisi un deuxième nombre entier ?");

console.log(userNumber % userNumber2);

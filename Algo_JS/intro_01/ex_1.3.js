const readlineSync = require("readline-sync");

let userName = readlineSync.question("Quel est ton nom ?");
console.log("Bonjour " + userName);

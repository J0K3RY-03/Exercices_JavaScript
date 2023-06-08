const readlineSync = require("readline-sync");

function dialog() {
  const numberToGenerate = parseInt(
    readlineSync.question("Combien de nombre voulez vous générer ? ")
  );
  return numberToGenerate;
}

function rand10() {
  let number = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  return number;
}

function multiRand() {
  let n = dialog();
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(rand10());
    console.log("Vous avez générer les nombres suivants: " + arr[i]);
  }
}

multiRand();

// doc
// Nom de la fonction multiRand
// Le n entre parenthèse est le nombre de chiffre qui nous désirons générer
// nous déclarons un tableau vide dans la variable arr
// puis nous allons boucler le nombre de fois qui se trouve dans n exemple ici c'est 3
// puis nous allons ajouté les nombres générer dans le tableau avec la méthode .push.

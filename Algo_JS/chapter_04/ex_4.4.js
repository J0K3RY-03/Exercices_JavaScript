const readlineSync = require("readline-sync");

let arr = [];

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
  for (let i = 0; i < n; i++) {
    arr.push(rand10());
    console.log("Vous avez générer le nombre suivant: " + arr[i]);
  }
  average(arr);
  mini(arr);
  maxi(arr);
}

function average(arr) {
  let averageNumber = 0;
  for (let elem of arr) {
    averageNumber += elem / arr.length;
  }
  console.log("La moyenne de vos nombres est de: " + averageNumber);
}

function mini(arr) {
  const numberMin = Math.min(...arr);
  console.log("Le nombre le plus petit générer est: " + numberMin);
}

function maxi(arr) {
  const numberMax = Math.max(...arr);
  console.log("Le nombre le plus grand générer est: " + numberMax);
}

multiRand();

// Doc
// La fonction dialog() va demander au l'utilisateur le nombre de nombre qu'il veut générer.

// La fonction rand10() va générer le nombre aléatoire

// La fonction multiRand() va exécuter la fonction dialog() qui va stocker le nombre de l'utilisateur dans la variable "n" puis nous allons boucler le nombre de fois que contient la variable "n" puis nous allons exécuter la fonction rand10() et nous allons utiliser la méthode .push() (insérer) les nombres aléatoires générer dans le tableau "arr" puis elle va éxécuter les fonctions average(), mini() et maxi() en lui donnant le tableau "arr" comme paramètre qui leur servira dans leur bloc.

// La fonction average() va renvoyer la moyenne des nombres aléatoire qui ont été insérer dans le tableau

// La fonction mini() va renvoyer le nombre le plus petit du tableau grâce à la méthode Math.min() et l'opérateur spread qui sont le 3 petits point avant le 'arr' (...arr).

// La fonction maxi() va renvoyer le nombre le plus grand du tableau grâce à la méthode Math.max() et l'opérateur spread qui sont le 3 petits point avant le 'arr' (...arr).

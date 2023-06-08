const readlineSync = require("readline-sync");

function dialog() {
  let length = parseInt(readlineSync.question("Quel est la longueur ? "));
  let width = parseInt(readlineSync.question("Quel est la largeur ? "));
  calcSurface(length, width);
}

function calcSurface(length, width) {
  return console.log("La surface est de " + length * width);
}

dialog();

// DOC function calcSurface:
// Le nom de la fonctione est calcSurface, nous mettons 2 arguments entre les parenthèses qui nous servirons à récupérer la longueur et la largeur dans la fonction dialog(), puis nous retournons la surface avec le mot return.

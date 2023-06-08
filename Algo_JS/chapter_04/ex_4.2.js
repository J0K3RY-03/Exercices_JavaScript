function rand10() {
  let number = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  console.log(number);
}

rand10();

// Doc:
// Nom de la fonction: rand10()
// la variable number va contenir le nombre générer aléatoirement.
// la méthode Math.floor() renvoi le plus grand entier exemple Math.floor(5.95) renvera 5
// la méthode Math.random() générera un nombre même a virgule entre 0 et 1, 1 étant exclu!

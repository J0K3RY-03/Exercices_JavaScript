const readlineSync = require("readline-sync");
const fs = require("fs");

function askTvSerie() {
  let tvSerie = {};
  const nameSerie = readlineSync.question("Nom de la série ? ");
  const yearOfProduction = readlineSync.question(
    "Année de production de la série ? "
  );
  const memberOfDistribution = parseInt(
    readlineSync.question(
      "Combien de membre de la distribution souhaitez vous ajouter ? "
    )
  );
  if (memberOfDistribution != 0) {
    tvSerie.name = nameSerie;
    tvSerie.yearOfProduction = yearOfProduction;
    tvSerie.memberOfDistribution = [];

    for (let i = 1; i <= memberOfDistribution; i++) {
      const nameMemberOfDistribution = readlineSync.question(
        `Veuillez écrire le nom du membre n ${i} `
      );

      tvSerie.memberOfDistribution.push(nameMemberOfDistribution);
    }
  } else {
    console.log("Vous devez ajouter au moins un membre de distribution");
    askTvSerie();
  }
  return tvSerie;
}

const objectSerieTv = JSON.stringify(askTvSerie());

fs.writeFile("tvSerie.json", objectSerieTv, "utf8", (err) => {
  if (err) {
    console.log("Erreur lors de l'enregistrement du fichier :", err);
    return;
  }
  console.log("Voici la série que vous venez d'enregistrer " + objectSerieTv);
});

function randomizeCast(objectSerieTv) {
  const tvSerie = JSON.parse(objectSerieTv);
  const memberCast = tvSerie.memberOfDistribution;
  let randomCast = memberCast.sort(() => Math.random() - 1);
  return randomCast;
}
let newSerie = randomizeCast(objectSerieTv);
console.log("les membres de votre prochaine série est:", newSerie);

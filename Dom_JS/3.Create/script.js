function createElement() {
  const currentArticle = document.querySelector("article");
  const hamilton = [
    "Julien",
    "Adeline",
    "Bathsheba",
    "Camille",
    "Cedric",
    "Clara",
    "Corentin",
    "Ilias",
    "Jason",
    "Jérôme",
    "Lucie",
    "Manon",
    "Marius",
    "Nathan",
    "Nicolas",
    "Ozlem",
    "Pauline",
    "Pietro",
    "Robin",
    "Rui",
    "Sam",
    "Sarah",
    "Steeve",
    "Tim",
    "Youssef",
  ];
  shuffleArray(hamilton);

  for (let i = 0; i < hamilton.length; i++) {
    const newSection = document.createElement("section");
    const newParagraph = document.createElement("p");
    let contentParagraph = hamilton[i];
    const textNode = document.createTextNode(contentParagraph);
    newParagraph.appendChild(textNode);
    newSection.appendChild(newParagraph);
    currentArticle.appendChild(newSection);
    newSection.style.background = generateRandomColor();
    const sectionColor = newSection.style.background;
    const luminosity = calculateLuminosity(sectionColor);

    if (luminosity < 125) {
      newParagraph.style.color = "white";
    } else {
      newParagraph.style.color = "black";
    }
  }
}

function generateRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const color = `rgb(${red}, ${green}, ${blue})`;

  return color;
}

function calculateLuminosity(color) {
  const values = color.substring(4, color.length - 1).split(",");
  const red = parseInt(values[0]);
  const green = parseInt(values[1]);
  const blue = parseInt(values[2]);
  const luminosity = (red * 299 + green * 587 + blue * 114) / 1000;

  return luminosity;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

createElement();

// fonction calculateLuminosity:
// La ligne const values = color.substring(4, color.length - 1).split(","); extrait les valeurs de rouge, vert et bleu de la chaîne de couleur. Elle utilise la méthode substring() pour obtenir une sous-chaîne de color, en excluant les premiers 4 caractères ("rgb(") et le dernier caractère (") => "). Ensuite, la méthode split(",") est utilisée pour diviser la sous-chaîne en un tableau de chaînes en utilisant la virgule comme séparateur. Values sera un tableau contenant les valeurs de rouge, vert et bleu en tant que chaînes.

// Les lignes const red = parseInt(values[0]);, const green = parseInt(values[1]); et const blue = parseInt(values[2]); convertissent les valeurs de rouge, vert et bleu en entiers à l'aide de la fonction parseInt(). Cela permet d'obtenir les composantes de couleur en tant que valeurs numériques.

// fonction createElement():
// Une boucle for est utilisée pour itérer à travers les éléments du tableau hamilton. À chaque itération :

// Une nouvelle section (<section>) est créée en utilisant document.createElement("section").

// Un nouveau paragraphe (<p>) est créé en utilisant document.createElement("p").

// Le contenu du paragraphe est défini en utilisant hamilton[i], où i représente l'indice actuel de l'itération dans la boucle.

// Un nœud de texte (textNode) est créé en utilisant document.createTextNode(contentParagraph), où contentParagraph est le contenu du paragraphe.

// Le nœud de texte est ajouté comme enfant du paragraphe en utilisant newParagraph.appendChild(textNode).

// Le paragraphe est ajouté comme enfant de la section en utilisant newSection.appendChild(newParagraph).

// La section est ajoutée comme enfant de l'article en utilisant currentArticle.appendChild(newSection).

// La couleur de fond de la section est définie en appelant generateRandomColor() et en utilisant newSection.style.background.

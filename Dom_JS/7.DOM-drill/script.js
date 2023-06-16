const ulList = document.querySelector("ul");
const firstChild = ulList.firstChild;
const childUlList = ulList.childNodes;
const childUlListNumber = ulList.children;
let totalChildren = childUlListNumber.length;
let importantElement;
console.log(importantElement);

childUlList.forEach((elem) => {
  if (elem.nodeType === 1) {
    if (elem.innerText === "Fast and Furious" && elem !== firstChild) {
      ulList.insertBefore(elem, firstChild);
      elem.classList.add("important");
      importantElement = elem;
    }
    elem.addEventListener("click", (event) => {
      if (elem.innerText === "Fast and Furious") {
        alert(
          "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family."
        );
      } else {
        alert(elem.innerText);
      }
    });
  }
});

for (let i = 0; i < totalChildren; i++) {
  const currentChild = childUlListNumber[i];
  for (let j = i + 1; j < childUlListNumber.length; j++) {
    const nextChild = childUlListNumber[j];
    if (currentChild.isEqualNode(nextChild)) {
      ulList.removeChild(nextChild);
      totalChildren--; // Réduire le nombre total d'enfants après la suppression
      j--; // Décrémenter j pour compenser la réduction de totalChildren
    }
  }
}

const bodyItem = document.querySelector("body");
const itemsLi = Array.from(ulList.children);
bodyItem.addEventListener("keyup", (event) => {
  const keyDown = event.key;
  if (keyDown === "r") {
    // Algorithme de mélange aléatoire
    for (let i = itemsLi.length - 1; i > 0; i--) {
      const j = getRandomIndex(0, i);
      [itemsLi[i], itemsLi[j]] = [itemsLi[j], itemsLi[i]];
    }

    // Mettre à jour l'ordre des éléments dans la liste
    itemsLi.forEach((e) => {
      ulList.appendChild(e);
      if (e.classList.contains("important")) {
        ulList.insertBefore(importantElement, ulList.firstChild);
      }
    });
  }

  if (keyDown === "d") {
    console.log("R pressed");
    const cloneElement = importantElement.cloneNode(true);
    ulList.appendChild(cloneElement);
  }
});

const createDiv = document.createElement("div");
bodyItem.insertBefore(createDiv, ulList);

const createSelectElement = document.createElement("select");
createDiv.appendChild(createSelectElement);

const createOption1 = document.createElement("option");
createSelectElement.appendChild(createOption1);
createOption1.innerText = "Franchise Importante";

const createOption2 = document.createElement("option");
createOption2.innerText = "Franchise Normale";
createSelectElement.appendChild(createOption2);

createSelectElement.addEventListener("change", (event) => {
  const selectedOption = event.target.value;

  itemsLi.forEach((elem) => {
    if (selectedOption === "Franchise Importante") {
      if (elem.classList.contains("important")) {
        elem.style.visibility = "visible";
      } else {
        elem.style.visibility = "hidden";
      }
    } else if (selectedOption === "Franchise Normale") {
      if (elem.classList.contains("important")) {
        elem.style.visibility = "hidden";
      } else {
        elem.style.visibility = "visible";
      }
    }
  });
});

// Fonction pour générer un nombre aléatoire entre deux bornes
function getRandomIndex(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

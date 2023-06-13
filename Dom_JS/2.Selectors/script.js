const important = document.querySelectorAll(".important");
const imgBal = document.querySelectorAll("img");
const para = document.querySelectorAll("p");

important.forEach((box) => {
  box.setAttribute("title", "This is an important item");
});

imgBal.forEach((elem) => {
  const getAttribute = elem.classList.contains("important");
  if (getAttribute) {
    elem.style.display = "none";
  }
});

para.forEach((elemP) => {
  const ArrColor = ["red", "blue", "orange", "green"];
  console.log(elemP.innerText);

  if (elemP.classList.length > 0) {
    console.log("Contenu de class: ", elemP.classList.value);
  } else {
    let randomColorIndex = Math.floor(Math.random() * ArrColor.length);
    let randomColor = ArrColor[randomColorIndex];

    elemP.style.color = randomColor;
    console.log(randomColor, "color");
  }
});

const _initTime = Date.now();

function getElapsedTime() {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
}

function clickOnSquare(e) {
  console.log("COLOR ", e.target.classList[1]);
  console.log(getElapsedTime());
  const arg = e.target.classList[1];
  const mainItem = document.querySelector("main");
  const selectedFirstSection = mainItem.firstElementChild;
  const creatDiv = document.createElement("div");
  creatDiv.addEventListener("click", (event) => {
    alert(e.target.classList[1]);
  });

  const text = document.createTextNode(
    "[" + getElapsedTime() + "]" + ` created a new ${arg} square`
  );
  selectedFirstSection.appendChild(creatDiv);
  creatDiv.className = "displayedsquare " + e.target.classList[1];
  creatLogsElement(arg, text);
}

function creatLogsElement(arg, text) {
  const mainItem = document.querySelector("main");
  const selectedlastSection = mainItem.lastElementChild;
  const selectList = selectedlastSection.lastElementChild;
  const creatLiElement = document.createElement("li");
  const elemLi = selectList.appendChild(creatLiElement);

  elemLi.appendChild(text);
}

const actionsquares = document.querySelectorAll(".actionsquare");
for (let actionsquare of actionsquares) {
  actionsquare.addEventListener("click", clickOnSquare);
}

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const color = `rgb(${red}, ${green}, ${blue})`;

  return color;
}

const actionBody = document.querySelector("body");
actionBody.addEventListener("keydown", (event) => {
  const code = event.key;

  if (code === " ") {
    actionBody.style.background = randomColor();
    let arg;
    const text = document.createTextNode(
      "[" + getElapsedTime() + "]" + "La touche espace a été pressé"
    );

    creatLogsElement(arg, text);
  }
});

actionBody.addEventListener("keydown", (event) => {
  const code = event.code;
  if (code === "KeyL") {
    deleteLogs();
  }
});

actionBody.addEventListener("keydown", (event) => {
  const code = event.key;
  if (code === "s") {
    deleteSquare();
  }
});

function deleteLogs() {
  const mainItem = document.querySelector("main");
  const selectedlastSection = mainItem.lastElementChild;
  const selectList = selectedlastSection.lastElementChild;
  const selectLiElem = selectList.querySelectorAll("li");

  selectLiElem.forEach((elem) => {
    elem.remove();
  });
}

function deleteSquare() {
  const mainItem = document.querySelector("main");
  const selectedFirstSection = mainItem.firstElementChild;
  const div = selectedFirstSection.querySelectorAll("div");

  div.forEach((elem) => {
    elem.remove();
  });
}

const getName = document.getElementById("firstname");

getName.addEventListener("keyup", (event) => {
  let getNameValue = document.querySelector("input").value;
  let spanReceiveNameValue = document.getElementById("display-firstname");
  let text = document.createTextNode(getNameValue);
  spanReceiveNameValue.innerHTML = "";
  if (getNameValue) {
    spanReceiveNameValue.appendChild(text);
  }
});

const getAgeInput = document.getElementById("age");
const hardElement = document.getElementById("a-hard-truth");

getAgeInput.addEventListener("input", (event) => {
  let getAgeInputValue = parseInt(getAgeInput.value);
  if (getAgeInputValue) {
    if (getAgeInputValue >= 18) {
      hardElement.style.visibility = "visible";
    } else {
      hardElement.style.visibility = "hidden";
    }
  }
});

const pwdInput = document.getElementById("pwd");
const pwdConfirmInput = document.getElementById("pwd-confirm");

pwdInput.addEventListener("keyup", (event) => {
  let pwdInputValue = pwdInput.value;
  let pwdInputValueLength = pwdInputValue.length;
  if (pwdInputValueLength < 6) {
    pwdInput.style.borderColor = "red";
  } else {
    pwdInput.style.borderColor = "";
  }
});

pwdConfirmInput.addEventListener("keyup", (event) => {
  let pwdConfirmInputValue = pwdConfirmInput.value;
  let pwdInputValue = pwdInput.value;
  if (pwdInputValue != pwdConfirmInputValue) {
    pwdInput.style.borderColor = "red";
    pwdConfirmInput.style.borderColor = "red";
  } else {
    pwdInput.style.borderColor = "";
    pwdConfirmInput.style.borderColor = "";
  }
});

const selectMode = document.getElementById("toggle-darkmode");
const body = document.querySelector("body");

selectMode.addEventListener("change", (event) => {
  let valueSelectedMode = selectMode.value;
  if (valueSelectedMode === "dark") {
    body.style.background = "black";
    body.style.color = "white";
  } else {
    body.style.background = "";
    body.style.color = "";
  }
});

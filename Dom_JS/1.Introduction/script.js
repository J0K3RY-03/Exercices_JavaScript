console.log(document.title);
document.title = "Modify the DOM !!";
document.body.style.background = "red";

function childrenBody() {
  const childrenBody = document.body.children;

  for (let elem of childrenBody) {
    console.log(elem);
  }
}

childrenBody();

const divContainer = document.querySelector(".div-container");
const divBox = document.querySelectorAll(".div-box");
let number = 0;
function getNumber() {
  return +prompt("Number? 16, 20 or 32");
}

function divAppend() {
  number = getNumber();
  for (i = 0; i < number; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "div-box";
    divContainer.append(newDiv);
  }
}

function modifyStyle(number) {
  divContainer.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  divContainer.style.gridTemplateRows = `repeat(${number}, 1fr)`;
}

modifyStyle(number);

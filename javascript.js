const divContainer = document.querySelector(".div-container");
const divBox = document.querySelectorAll(".div-box");
const btn16 = document.getElementById("16");
const btn20 = document.getElementById("20");
const btn32 = document.getElementById("32");
const btn64 = document.getElementById("64");
const newSheet = document.getElementById("newSheet");

btn16.addEventListener("click", function (e) {
  divContainer.replaceChildren();
  number = 16;
  modifyStyle(number);
  divAppend(16 * 16);
});

btn20.addEventListener("click", function (e) {
  divContainer.replaceChildren();
  number = 20;
  modifyStyle(number);
  divAppend(20 * 20);
});

btn32.addEventListener("click", function (e) {
  divContainer.replaceChildren();
  number = 32;
  modifyStyle(number);
  divAppend(32 * 32);
});
btn64.addEventListener("click", function (e) {
  divContainer.replaceChildren();
  number = 64;
  modifyStyle(number);
  divAppend(64 * 64);
});

newSheet.addEventListener("click", function (e) {
  divContainer.replaceChildren();
  number = 16;
  modifyStyle(number);
  divAppend(16 * 16);
});

// User inputted number
let number = 16;

function getNumber() {
  return (number = +prompt("Number? 16, 20 or 32"));
}

// Adds divs based on number squared
divAppend(number * number);

function divAppend(number) {
  for (i = 0; i < number; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "div-box";
    divContainer.append(newDiv);
  }
}

// Changes rows and colums with user number
function modifyStyle(number) {
  divContainer.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  divContainer.style.gridTemplateRows = `repeat(${number}, 1fr)`;
}

// if box button clicked
//remove all divs
// call append with new number

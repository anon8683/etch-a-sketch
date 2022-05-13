const divContainer = document.querySelector(".div-container");
const divBox = document.querySelectorAll(".div-box");
const slider = document.getElementById("myRange");
let number =
  // User inputted number

  slider.addEventListener("change", getSlider);

function getSlider() {
  console.log(document.getElementById("myRange").value);
  return document.getElementById("myRange").value;
}

// Adds divs based on number squared
divAppend(number * number);

function divAppend(number) {
  for (i = 0; i < number; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "div-box";
    divContainer.append(newDiv);
    newDiv.addEventListener("mouseover", function (e) {
      newDiv.style.backgroundColor = "black";
    });
  }
}

modifyStyle(number);
// Changes rows and colums with user number
function modifyStyle(number) {
  divContainer.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  divContainer.style.gridTemplateRows = `repeat(${number}, 1fr)`;
}

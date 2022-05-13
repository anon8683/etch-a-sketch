const divContainer = document.querySelector(".div-container");
const divBox = document.querySelectorAll(".div-box");
const slider = document.getElementById("myRange");
const sliderDisplay = document.getElementById("grid-size");

let number = 16;

// Adds listener to slider, runs func when slider changed
slider.addEventListener("change", getSlider);
sliderDisplay.textContent = `${number}x${number}`;

// Gets the current value of slider and turns number into value
function getSlider() {
  number = document.getElementById("myRange").value;
  sliderDisplay.textContent = `${number}x${number}`;
  clearGrid(number);
  return (number = document.getElementById("myRange").value);
}

function clearGrid(number) {
  divContainer.replaceChildren();
  divAppend(number * number);
  modifyStyle(number);
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

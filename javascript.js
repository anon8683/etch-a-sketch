const divContainer = document.querySelector(".div-container");
const divBox = document.querySelectorAll(".div-box");
const slider = document.getElementById("myRange");
const sliderDisplay = document.getElementById("grid-size");
const colorPicker = document.getElementById("color-picker");
const backgroundColor = document.getElementById("bgcolor-picker");
const newButton = document.getElementById("newSheet");
const backGroundButton = document.getElementById("background");
const rainbowButton = document.getElementById("rainbow");

let number = 16;
let color = "black";
let backGroundColor = "white";
let colors = [];
let rainbowMode = false;

// Adds listener to slider, runs func when slider changed
slider.addEventListener("input", getSlider);
colorPicker.addEventListener("input", getColor);
backgroundColor.addEventListener("input", changeBackground);
rainbowButton.addEventListener("click", rainbowTrue);
newButton.addEventListener("click", newSheet);

sliderDisplay.textContent = `${number}x${number}`;

function newSheet() {
  clearGrid(number);
  divContainer.style.backgroundColor = "white";
}

// Gets the current value of slider and turns number into value
function getSlider() {
  number = document.getElementById("myRange").value;
  sliderDisplay.textContent = `${number}x${number}`;
  clearGrid(number);
  return (number = document.getElementById("myRange").value);
}

function getColor() {
  color = document.getElementById("color-picker").value;
  console.log(color);
  return color;
}

function changeBackground() {
  backGroundColor = document.getElementById("bgcolor-picker").value;
  divContainer.style.backgroundColor = backGroundColor;
  return backGroundColor;
}

function randomColor() {
  colors = ["red", "blue", "green", "yellow", "purple", "orange"];
  color = colors[Math.floor(Math.random() * colors.length)];
  return;
}

// Removes all dom divs, then appends new number of divs and modifys grid column/row
function clearGrid(number) {
  divContainer.replaceChildren();
  divAppend(number * number);
  modifyStyle(number);
}

// Adds our starting grid of 16x16 divs
divAppend(number * number);

function divAppend(number) {
  for (i = 0; i < number; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "div-box";
    divContainer.append(newDiv);
    newDiv.addEventListener("mouseover", function (e) {
      if (rainbowMode === true) {
        newDiv.style.backgroundColor = randomColor();
      } else {
        color = getColor();
      }
      newDiv.style.backgroundColor = color;
    });
  }
}
function rainbowTrue() {
  if (rainbowMode === false) {
    rainbowMode = true;
    rainbowButton.className = "true";
  } else if (rainbowMode === true) {
    rainbowMode = false;
    rainbowButton.classList.remove("true");
  }
  console.log(rainbowMode);
}

modifyStyle(number);
// Changes rows and colums with user number
function modifyStyle(number) {
  divContainer.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  divContainer.style.gridTemplateRows = `repeat(${number}, 1fr)`;
}

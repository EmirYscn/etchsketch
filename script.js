let canvasWidth = 800;
let canvasHeight = 600;
const initialGridSize = 16;
let drawColor = "rgb(0, 0, 0)";

const canvas = document.querySelector(".canvas");
const gridButton = document.querySelector(".grid-size");
const eraseButton = document.querySelector(".erase-btn");
const colorButton = document.querySelector(".color-picker");
const colorInput = document.querySelector("#color-picker");
const gridInput = document.querySelector("#grid-number");
const gridSizePara = document.querySelector(".current-grid-size");
const randomColorButton = document.querySelector(".random-color");

gridButton.addEventListener("click", () => {
  let gridSize = gridInput.value;
  gridSizePara.textContent = `Current Grid Size: ${gridSize}x${gridSize}`;

  createGrid(gridSize);
});

colorButton.addEventListener("click", () => {
  drawColor = colorInput.value;
});

let isRandom = false;

randomColorButton.addEventListener("click", () => {
  isRandom = !isRandom;
  randomColorButton.textContent = `Random Color: ${isRandom ? "On" : "Off"}`;
});

function getRandomColor() {
  return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`;
}

function drawing() {
  const columns = document.querySelectorAll(".column");
  columns.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.style.backgroundColor = isRandom ? getRandomColor() : drawColor;
    });
  });

  eraseButton.addEventListener("click", () => {
    columns.forEach((element) => {
      element.style.backgroundColor = "#fff";
    });
  });
}
function clearGrid() {
  canvas.innerHTML = "";
}

function createGrid(size) {
  clearGrid();

  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    canvas.appendChild(row);

    for (let j = 0; j < size; j++) {
      const column = document.createElement("div");
      column.classList.add("column");
      let height = (canvasHeight / size).toString() + "px";
      let width = (canvasWidth / size).toString() + "px";
      column.style.height = height;
      column.style.width = width;
      row.appendChild(column);
    }
  }
  drawing();
}
createGrid(initialGridSize);

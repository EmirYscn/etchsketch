let canvasWidth = 800;
let canvasHeight = 600;
const initialGridSize = 16;
let drawColor = "rgb(0, 0, 0)";

const canvas = document.querySelector(".canvas");
const gridButton = document.querySelector(".grid-size");
const eraseButton = document.querySelector(".erase-btn");
const colorButton = document.querySelector(".color-picker");
const colorInput = document.querySelector("#color-picker");

gridButton.addEventListener("click", () => {
  let gridSize = prompt("What should be the number of squares per side?");
  if (gridSize > 100) {
    alert("Too much square, must be less than 100");
    return;
  }
  createGrid(gridSize);
});

colorButton.addEventListener("click", () => {
  drawColor = colorInput.value;
});

function drawing() {
  const columns = document.querySelectorAll(".column");
  columns.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.style.backgroundColor = drawColor;
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

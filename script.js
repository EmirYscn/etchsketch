let canvasWidth = 800;
let canvasHeight = 600;
const initialGridSize = 16;
let drawColor = "rgb(0, 0, 0)";

const canvas = document.querySelector(".canvas");
const buttonCanvas = document.querySelector(".grid-size");
const eraseButton = document.querySelector(".erase-btn");

buttonCanvas.addEventListener("click", () => {
  let squareNum = prompt("What should be the number of squares per side?");
  if (squareNum > 100) {
    alert("Too much square\nMust be less than 100");
    return;
  }
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
  createGrid(squareNum);
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

function createGrid(size) {
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

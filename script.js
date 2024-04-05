let canvasWidth = 800;
let canvasHeight = 600;
const initialGridSize = 100;
let drawColor = "rgb(0, 0, 0)";

const canvas = document.querySelector(".canvas");
const buttonCanvas = document.querySelector(".canvas-size");

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

function createRow(size) {
  for (let i = 0; i < size; i++) {
    const divRow = document.createElement("div");
    divRow.style.height = "100%";
    divRow.style.width = "100%";
    divRow.style.display = "flex";
    canvas.appendChild(divRow);
    for (let j = 0; j < size; j++) {
      divRow.appendChild(createDiv(size));
    }
  }
}
function createDiv(gridNum) {
  const div = document.createElement("div");
  let height = (canvasHeight / gridNum).toString() + "px";
  let width = (canvasWidth / gridNum).toString() + "px";
  div.style.height = height;
  div.style.width = width;
  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = drawColor;
  });
  return div;
}

function createGrid(gridNum) {
  createRow(gridNum);
}

createGrid(initialGridSize);

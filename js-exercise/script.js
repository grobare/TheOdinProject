const canvas = document.querySelector("#can");
const ctx = canvas.getContext("2d");

const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = "blue";

function draw() {
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  ctx.fillStyle = color;
  ctx.fill();
}
draw();

const button = document.querySelector("button");

button.addEventListener("click", () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
);

const undo = document.querySelector("#undo");

undo.addEventListener("click", () => draw());

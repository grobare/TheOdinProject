const canvas = document.querySelector("#can");
const ctx = canvas.getContext("2d");
const newBtn = document.querySelector("#new");
const clearBtn = document.querySelector("#undo");

let WIDTH = document.documentElement.clientWidth;
let HEIGHT = document.documentElement.clientHeight;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function random(num) {
  return Math.floor(Math.random() * num);
}

function draw() {
  clear();
  for (let index = 0; index < 100; index++) {
    ctx.beginPath();
    ctx.fillStyle = `rgba(${random(255)},${random(255)},${random(
      255
    )}, ${Math.random()})`;
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}

function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

draw();

newBtn.addEventListener("click", draw);
clearBtn.addEventListener("click", clear);

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 1;
let resetButton;
guessField.focus();

function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous numbers: ";
  }
  guesses.textContent += ` ${userGuess}`;

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    startNewGame();
  } else if (guessCount === 10) {
    lastResult.style.backgroundColor = "black";
    lastResult.textContent = `Game over!!! Lucky number was ${randomNumber}`;
    startNewGame();
  } else {
    if (userGuess < randomNumber) {
      lastResult.textContent = "Too low!";
      lastResult.style.backgroundColor = "blue";
    } else {
      lastResult.textContent = "Too high!";
      lastResult.style.backgroundColor = "red";
    }
  }
  guessField.focus();
  guessCount++;
  guessField.value = "";
}

guessSubmit.addEventListener("click", checkGuess);

function startNewGame() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";

  lowOrHi.appendChild(resetButton);
  resetButton.addEventListener("click", reset);
}

function reset() {
  const paras = document.querySelectorAll(".resultParas p");
  for (const para of paras) {
    para.textContent = "";
    para.style.backgroundColor = "transparent";
  }
  guessField.focus();
  guessCount = 1;
  randomNumber = Math.floor(Math.random() * 100) + 1;
  guessField.disabled = false;
  guessSubmit.disabled = false;
}

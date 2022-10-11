const container = document.querySelector(".container");
const input = document.querySelector("input");
const btn = document.querySelector("button");
const result = document.querySelector(".result");
const previousGuesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 1;

function checkGuess() {
  const userGuess = Number(input.value);
  if (guessCount === 1) {
    previousGuesses.textContent = "Previous guesses:";
  }

  if (userGuess !== randomNumber && guessCount <= 10) {
    previousGuesses.textContent += ` ${String(userGuess)}`;
    userGuess > randomNumber
      ? (lowOrHi.textContent = "Too high!")
      : (lowOrHi.textContent = "Too low!");
    guessCount++;
    input.value = "";
  }
  if (userGuess === randomNumber && guessCount <= 10) {
    lowOrHi.textContent = "You win!";
  }
}

btn.addEventListener("click", checkGuess);

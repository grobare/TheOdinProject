const inputField = document.querySelector("#userGuess");
const submitButton = document.querySelector(".submitButton");
const resultsContainer = document.querySelector(".results");
const previousNumbers = document.querySelector(".previousNumbers");
const currentNumber = document.querySelector(".currentNumber");

submitButton.addEventListener("click", check);

let ranNumber = randomNumber();
let numberOfGuess = 0;

function print() {
  previousNumbers.textContent += ` ${inputField.value}`;
  inputField.value = "";
  inputField.focus();
}

function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function check() {
  if (inputField.value > ranNumber) {
    currentNumber.textContent = "Too high!";
    numberOfGuess++;
    print();
  } else if (inputField.value < ranNumber) {
    currentNumber.textContent = "Too low!";
    numberOfGuess++;
    print();
  } else {
    currentNumber.textContent = `You win from ${++numberOfGuess} tries!`;
    print();
  }
}

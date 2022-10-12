const inputField = document.querySelector("#userGuess");
const submitButton = document.querySelector(".submitButton");
const results = document.querySelector(".results");
const previousNumbers = document.querySelector(".previousNumbers");
const currentNumber = document.querySelector(".currentNumber");

submitButton.addEventListener("click", check);

let ranNumber = randomNumber();
let numberOfGuess = 1;

function print() {
  previousNumbers.textContent += ` ${inputField.value}`;
  inputField.value = "";
  inputField.focus();
}

function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function check() {
  if (inputField.value > ranNumber && numberOfGuess < 7) {
    currentNumber.textContent = "Too high!";
    currentNumber.style.backgroundColor = "red";
    currentNumber.style.textAlign = "center";
    currentNumber.style.color = "white";
    numberOfGuess++;
    print();
  } else if (inputField.value < ranNumber && numberOfGuess < 7) {
    currentNumber.textContent = "Too low!";
    currentNumber.style.backgroundColor = "blue";
    currentNumber.style.textAlign = "center";
    currentNumber.style.color = "white";
    numberOfGuess++;
    print();
  } else if (inputField.value === ranNumber) {
    currentNumber.textContent = `You win from ${++numberOfGuess} tries!`;
    currentNumber.style.backgroundColor = "green";
    currentNumber.style.textAlign = "center";
    currentNumber.style.color = "white";
    print();
    playAgain(results);
  } else {
    currentNumber.textContent = `You lose. The number was ${ranNumber}`;
    currentNumber.style.backgroundColor = "black";
    currentNumber.style.textAlign = "center";
    currentNumber.style.color = "white";
    playAgain(results);
  }
}

function playAgain(selector) {
  const para = document.createElement("p");
  const button = document.createElement("button");
  para.classList.add("appendedClass");
  button.textContent = "Play again?";
  button.classList.add("restart");
  button.addEventListener("click", clear);
  para.appendChild(button);
  selector.appendChild(para);
}

function clear() {
  previousNumbers.textContent = "";
  currentNumber.textContent = "";
  numberOfGuess = 1;
  results.removeChild(results.lastElementChild);
}

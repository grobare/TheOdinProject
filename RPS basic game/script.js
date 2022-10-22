function getComputerChoice() {
  const randInt = Math.floor(Math.random() * 3) + 1;
  if (randInt === 1) {
    return "rock";
  }
  if (randInt === 2) {
    return "paper";
  }
  if (randInt === 3) {
    return "scissors";
  }
  return "Wrong input.";
}

function playRound() {
  const PC = getComputerChoice();
  const human = prompt("Enter your choice!");

  if (human === "paper" || human === "rock" || human === "scissors") {
    if (PC === "rock" && human === "scissors") {
      console.log("You lose! Rock beats scissors!");
    } else if (PC === "paper" && human === "rock") {
      console.log("You lose! Paper beats rock!");
    } else if (PC === "scissors" && human === "paper") {
      console.log("You lose! Scissors beats paper!");
    } else {
      console.log("You win!");
    }
  } else {
    console.log("Wrong entry.");
  }
}

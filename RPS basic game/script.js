//player must make a choice
//random number
//compare func
//player decision based on input

function playerChoose() {
  const answer = prompt("Enter your choice!");
  return answer;
}

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
  return;
}

function playRound(PC, human) {
  if (PC === "rock" && human === "scissors") {
    console.log("You lose! Rock beats scissors!");
  } else if (PC === "paper" && human === "rock") {
    console.log("You lose! Paper beats rock!");
  } else if (PC === "scissors" && human === "paper") {
    console.log("You lose! Scissors beats paper!");
  } else {
    console.log("You win!");
  }
}

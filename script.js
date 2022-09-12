console.log('Hej, and welcome to simple game of luck!')
console.log('Your goal is to choose a number between 000 and 999')
console.log('If you guess it right you will win 888x your bet and chance to win a jackpot which is won if you pick the right card from the deck.')

let winningNumber = Math.floor(Math.random() * 1000) + 1

let answer = 25

if (answer == winningNumber) {
    console.log('YOU WIN')
} else {
    console.log('You lose. The winning number was', winningNumber)
}

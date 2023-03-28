console.log("Hello World!")
let computerInput = ["rock", "paper", "scissors"]
let paperWinRock = "Paper beats Rock" 
let scissorsWinPaper = "Scissors beats paper"
let rockWinScissors = "Rock beats Scissors"
let draw = "It is a draw"

function getComputerChoice() {
   computerInput[Math.floor(Math.random()*computerInput.length)]
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection===computerSelection) {
        console.log("")
    }

}
console.log("Hello World!")
let computerInput = ["rock", "paper", "scissors"]
let paperWinRock = "Paper beats Rock" 
let scissorsWinPaper = "Scissors beats paper"
let rockWinScissors = "Rock beats Scissors"
let draw = "It is a draw!"

function getComputerChoice() {
   computerInput[Math.floor(Math.random()*computerInput.length)]
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection==="scissors"&&computerSelection==="rock") {
        console.log(`You lose! ${rockWinScissors}`)
    }
    else if (playerSelection==="scissors"&&computerSelection==="paper") {
        console.log(`You win! ${scissorsWinPaper}`)
    }
    
    else if (playerSelection==="rock"&&computerSelection==="paper") {
        console.log(`You lose! ${paperWinRock}`)
    }
    else if (playerSelection==="rock"&&computerSelection==="scissors") {
        console.log(`You win! ${rockWinScissors}`)
    }
    else if (playerSelection==="paper"&&computerSelection==="rock") {
        console.log(`You win! ${paperWinRock}`)
    }
    else if (playerSelection==="paper"&&computerSelection==="scissors") {
        console.log(`You lose! ${scissorsWinPaper}`)
    }
    else {
        console.log(draw)
    }

}
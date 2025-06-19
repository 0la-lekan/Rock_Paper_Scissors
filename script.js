// Step 1 --- testing console
console.log("Hello World");

// step 2 --- generate computer choice
function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*100);
    let computerValue;
    // console.log(randomNum);

    if (randomNum >= 0 && randomNum < 31) {
         computerValue = "rock";
         return computerValue;
    }
    else if (randomNum >= 31 && randomNum < 61) {
        computerValue = "paper";
        return computerValue;
    }
    else {
        computerValue = "scissors";
        return computerValue;
    }
}
// getcomputerValue()

// step 3 --- get human choice

function getHumanChoice() {
    let userInput = prompt("Rock, Paper or Scissors?");
    return userInput.toLowerCase();
}
// getHumanChoice()

// step 4 --- create score variables
let humanScore = 0;
let computerScore = 0;

// step 5 --- Create a round of the game

function playGround(humanChoice,computerChoice) {

const draw = "It's a tie!";
const scissorsWin = "Scissors beats Paper!";
const paperWin = "Paper beats Rock!"; 
const rockWin = "Rock beats Scissors!"
const win = "You win";
const lose = "You lose";

//try humanChoice.toLowerCase()

if (humanChoice == computerChoice) {
     console.log(draw);
}
else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log(lose + ", " + paperWin);
   return ++computerScore
}
else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log(win + ", " + rockWin);
   return ++humanScore
}
else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log(win + ", " + paperWin);
   return ++humanScore
}
else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log(lose + ", " + scissorsWin);
   return ++computerScore
}
else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log(win + ", " + scissorsWin);
   return ++humanScore
}
else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log(lose + ", " + rockWin);
   return ++computerScore
}
}

const humanSelection = getComputerChoice();
const computerSelection = getComputerChoice();

playGround(humanSelection, computerSelection);

function playGame() {

    //let oneRound = playGround(humanSelection, computerSelection);

    playGround(humanSelection, computerSelection);
    playGround(humanSelection, computerSelection);
    playGround(humanSelection, computerSelection);
    playGround(humanSelection, computerSelection);
  
    //oneRound;
  
    console.log(humanScore);
    console.log(computerScore);
}

playGame()

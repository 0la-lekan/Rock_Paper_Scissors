// Step 1 --- testing console
console.log("Hello World");

// step 2 --- generate computer choice
function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*100);
    let computerChoice;
    // console.log(randomNum);

    if (randomNum >= 0 && randomNum < 31) {
         computerChoice = "rock";
         return computerChoice;
    }
    else if (randomNum >= 31 && randomNum < 61) {
        computerChoice = "paper";
        return computerChoice;
    }
    else {
        computerChoice = "scissors";
        return computerChoice;
    }
}
// getComputerChoice()

// step 3 --- get human choice

function getHumanChoice() {
    let userInput = prompt("Rock, Paper or Scissors?");
    return userInput.toLowerCase();
}
// getHumanChoice()

// step 4 --- create score variables
let humanScore = 0;
let computerScore = 0;
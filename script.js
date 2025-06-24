// Step 1 --- testing console

console.log("Hello World");

// step 2 --- generate computer choice

function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*100);
    let computerValue;

    if (randomNum >= 0 && randomNum < 34) {
         computerValue = "rock";
         return computerValue;
    }
    else if (randomNum >= 34 && randomNum < 67) {
        computerValue = "paper";
        return computerValue;
    }
    else {
        computerValue = "scissors";
        return computerValue;
    }
}


// step 3 --- get human choice

function getHumanChoice() {
    let userInput = prompt("Rock, Paper or Scissors?");
    return userInput.toLowerCase();
}


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
const paperWinFullComputer = `${lose}, ${paperWin}`;
const paperWinFullHuman = `${win}, ${paperWin}`;
const scissorsWinWinFullHuman = `${win}, ${scissorsWin}`;
const scissorsWinWinFullComputer = `${lose}, ${scissorsWin}`;
const rockWinFullHuman = `${win}, ${rockWin}`;
const rockWinFullComputer = `${lose}, ${rockWin}`;

console.log(`You entered ${humanChoice} and computer selects ${computerChoice}`);

if (humanChoice == computerChoice) {
    console.log(draw);
}
else if (humanChoice == "rock" && computerChoice == "paper") {
    ++computerScore;
    console.log(paperWinFullComputer);
}
else if (humanChoice == "rock" && computerChoice == "scissors") {
    ++humanScore;
    console.log(rockWinFullHuman);
}
else if (humanChoice == "paper" && computerChoice == "rock") {
    ++humanScore;
    console.log(paperWinFullHuman);
}
else if (humanChoice == "paper" && computerChoice == "scissors") {
    ++computerScore;
    console.log(scissorsWinWinFullComputer);
   
}
else if (humanChoice == "scissors" && computerChoice == "paper") {
    ++humanScore;
    console.log(scissorsWinWinFullHuman);
  
}
else if (humanChoice == "scissors" && computerChoice == "rock") {
    ++computerScore;
    console.log(rockWinFullComputer);
}
}


 playGround(getHumanChoice(), getComputerChoice());

function playGame() {

    playGround(getHumanChoice(), getComputerChoice());
    playGround(getHumanChoice(), getComputerChoice());
    playGround(getHumanChoice(), getComputerChoice());
    playGround(getHumanChoice(), getComputerChoice());

    
  
    console.log("User score = " + humanScore);
    console.log("Computer score = " + computerScore);

    if (humanScore > computerScore) {
        console.log("Therefore, You win!");
    }
    else if (humanScore==computerScore) {
        console.log("It is a draw")
    }
    else {
        console.log("Therefore, You lose and computer wins!")
    }
}

playGame();

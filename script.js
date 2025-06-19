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

function getComputerChoice1() {
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

function getComputerChoice2() {
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

function getComputerChoice3() {
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

function getComputerChoice4() {
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

function getHumanChoice1() {
    let userInput = prompt("Rock, Paper or Scissors?");
    return userInput.toLowerCase();
}

function getHumanChoice2() {
    let userInput = prompt("Rock, Paper or Scissors?");
    return userInput.toLowerCase();
}

function getHumanChoice3() {
    let userInput = prompt("Rock, Paper or Scissors?");
    return userInput.toLowerCase();
}

function getHumanChoice4() {
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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

const humanSelection1 = getHumanChoice1();
const humanSelection2 = getHumanChoice2();
const humanSelection3 = getHumanChoice3();
const humanSelection4 = getHumanChoice4();

const computerSelection1 = getComputerChoice1();
const computerSelection2 = getComputerChoice2();
const computerSelection3 = getComputerChoice3();
const computerSelection4 = getComputerChoice4();


// playGround(humanSelection, computerSelection);

function playGame() {

   // let oneRound = playGround(humanSelection, computerSelection);

    playGround(humanSelection, computerSelection);
    playGround(humanSelection2, computerSelection1);
    playGround(humanSelection3, computerSelection2);
    playGround(humanSelection3, computerSelection3);
    playGround(humanSelection4, computerSelection4);
    
  
  //  oneRound;
  
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

// console.log(Math.random());
// console.log(Math.random());
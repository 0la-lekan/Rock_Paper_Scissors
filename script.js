// Step 1 --- testing console
console.log("Hello World");

// step 2 --- generate computer choice
function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*100);
    let computerChoice;
    // console.log(randomNum);

    if (randomNum >= 0 && randomNum < 31) {
         computerChoice = "Rock";
         return computerChoice;
    }
    else if (randomNum >= 31 && randomNum < 61) {
        computerChoice = "Paper";
        return computerChoice;
    }
    else {
        computerChoice = "Scissors";
        return computerChoice;
    }
}
console.log(getComputerChoice())
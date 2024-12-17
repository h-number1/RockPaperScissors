const rock = "rock";
const paper = "paper";
const scissors = "scissors";


function getComputerChoice() {

    let computerChoice = Math.random();
    computerChoice = Number.parseFloat(computerChoice).toFixed(2);
    //the variable is having its value rounded to two decimal places.
    if (computerChoice <= 0.33) {
        computerChoice = rock;
        return computerChoice;
    } else if (computerChoice > 0.33 && computerChoice <= 0.66) {
        //the variable is having its value rounded to two decimal places.
        computerChoice = paper;
        return computerChoice;
    } else if (computerChoice > 0.66 && computerChoice <= 1) {
        computerChoice = scissors;
        return computerChoice;
    } else {
        return "error in code";
    }
    

}

console.log(getComputerChoice());

//Create a function that represents the computer choice
//This function will randomly return a value of rock, paper or scissors.
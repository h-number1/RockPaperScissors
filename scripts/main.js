const rock = "rock";
const paper = "paper";
const scissors = "scissors";


function getComputerChoice() {
    let computerChoice = Math.random();
    computerChoice = Number.parseFloat(computerChoice).toFixed(2);
    console.log(computerChoice);
}

getComputerChoice();

//Create a function that represents the computer choice
//This function will randomly return a value of rock, paper or scissors.
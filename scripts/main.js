const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let computerScore = 0;
let humanScore = 0;

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
        return "Error";
    }
    
}

function getHumanChoice() {
    let userInput = prompt("Enter your choice...");

    if (userInput.toLowerCase() === "rock") {
        userInput = rock;
        return userInput;
    } else if (userInput.toLowerCase() === "paper") {
        userInput = paper;
        return userInput;
    } else if (userInput.toLowerCase() === "scissors") {
        userInput = scissors;
        return userInput;
    } else {
        console.log("Please enter a valid choice.");
    }
}

//console.log(getComputerChoice());
console.log(getHumanChoice());

//Create a function that represents the computer choice
//This function will randomly return a value of rock, paper or scissors.

//Create a function thst represents the human choice.
//prompt the user to choose one of the three choices.
//return that choice.
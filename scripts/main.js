const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let computerScore = 0;
let humanScore = 0;

function getcomputerChoice() {

    let computerInput = Math.random();
    computerInput = Number.parseFloat(computerInput).toFixed(2);
    //the variable is having its value rounded to two decimal places.
    if (computerInput <= 0.33) {
        computerInput = rock;
        return computerInput;
    } else if (computerInput > 0.33 && computerInput <= 0.66) {
        //the variable is having its value rounded to two decimal places.
        computerInput = paper;
        return computerInput;
    } else if (computerInput > 0.66 && computerInput <= 1) {
        computerInput = scissors;
        return computerInput;
    } else {
        return "Error";
    }
    
}

//Create a function that represents the computer choice
//This function will randomly return a value of rock, paper or scissors.

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

//Create a function thst represents the human choice.
//prompt the user to choose one of the three choices.
//return that choice.

function playRound(humanChoice, computerChoice) {

}

const computerSelection = getcomputerChoice(); // is equal to what the function returns
const humanSelection = getHumanChoice(); // is also equal to what this function returns

console.log(humanSelection);
console.log(computerSelection);
//create function that plays a 'round' of the game
//
const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let computerScore = 0;
let humanScore = 0;

/*function getcomputerChoice() {

    let computerInput = Math.random();
    console.log(computerInput);
    computerInput = Number.parseFloat(computerInput).toFixed(2);
    //the variable is having its value rounded to two decimal places.
    if (computerInput <= 0.33) {
        computerInput = rock;
        return computerInput;
    } else if (computerInput > 0.33 && computerInput <= 0.66) {
        computerInput = paper;
        return computerInput;
    } else if (computerInput > 0.66 && computerInput <= 1) {
        computerInput = scissors;
        return computerInput;
    } else {
        return "Error";
    }
    
} */ 
//this is my old iteration of getting the computer choice...

function getComputerChoice() {

    const choiceArray = [rock, paper, scissors];
    const randomNum = Math.floor(Math.random() * 3);
    //console.log(randomNum);
    let computerChoice = choiceArray[randomNum];
    //console.log(computerChoice);
    return computerChoice;
}

//Create a function that represents the computer choice
//This function will randomly return a value of rock, paper or scissors.

function getHumanChoice() {
    let humanChoice = prompt("Type your choice:", "")

    if (humanChoice.toLowerCase() === "rock") {
        humanChoice = rock;
        return humanChoice;
    } else if (humanChoice.toLowerCase() === "paper") {
        humanChoice = paper;
        return humanChoice;
    } else if (humanChoice.toLowerCase() === "scissors") {
        humanChoice = scissors;
        return humanChoice;
    } else {
        console.log("Please enter a valid choice.");
    }
}

//Create a function thst represents the human choice.
//prompt the user to choose one of the three choices.
//return that choice.

function playRound(computerChoice, humanChoice) {
    
    if ((computerChoice === "rock" && humanChoice === "scissors") 
        || (computerChoice === "paper" && humanChoice === "rock")
        || (computerChoice === "scissors" && humanChoice === "paper")) {
            console.log(`Computer chose ${computerChoice} which beats ${humanChoice}. You Lose!`);
            computerScore++;
            console.log(`The computer's total score is: ${computerScore}`);
    } 
    else if ((humanChoice === "rock" && computerChoice === "scissors")
        || (humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice === "scissors" && computerChoice === "paper")) {
            console.log(`You chose ${humanChoice} which beats ${computerChoice}. You win!`);
            humanScore++;
            console.log(`Your total score is: ${humanScore}`);
    } else {
        console.log('you both chose the same answer, try again.')
    }
}

//rock beats scissors
// paper beats rock
//scissors beats paper

//create function that plays a 'round' of the game

function playGame() {
    while (humanScore < 2 && computerScore < 2) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(computerSelection, humanSelection);
    }
}
//create function that plays a whole game (5 rounds)

playGame();
//JS file for running Rock, Paper, Scissors

//Create two variables to keep score: humanScore and computerScore
let computerScore = 0;
let humanScore = 0;

/*
* Write function: getComputerChoice
* Randomly returns “rock”, “paper”, or “scissors” string values
* Hint: use Math.random method (returns random number x>=0 && x<1)
* Test function using console.log
*/
function getComputerChoice() {
    let rng = Math.floor(Math.random() * 3 + 1);
    let choice; //Empty string variable
    if (rng == 1) {
        choice = "rock";
    } else if (rng == 2) {
        choice = "paper";
    } else if (rng == 3) {
        choice = "scissors";
    } //if
    return choice;
} //getComputerChoice

console.log(getComputerChoice());

/*
* Write function: getHumanChoice
* Returns “rock”, “paper”, or “scissors” string values depending on user input
* NOTE: Need to check for invalid inputs (i.e., other than “rock”, “paper”, and “scissors”) 
* Hint: use prompt method to obtain user input
* Test function using console.log
*/
function getHumanChoice() {
    //Declare string variable that equals user input
    let input = prompt("Enter rock, paper, or scissors to play");
    input = input.trim(); //Trims whitespace from input
    input = input.toLowerCase(); //Convert input to lower case string
    //Check for invalid inputs (i.e., not rock, paper, scissors)
    let validInput;
    if ((input === "rock") || (input === "paper") || (input === "scissors")) {
        validInput = input;
    } else {
        console.log("Invalid input. Please refresh and try again");
    } //if
    return validInput;
} //getHumanChoice

console.log(getHumanChoice());

/*
* Write function: playRound
* Define two parameters to take players’ choices as arguments: humanChoice and computerChoice
* Make humanChoice parameter case-insensitive (i.e., can enter “rock”, “ROCK”, or “Rock”, etc.)
* Include console.log for string value with victory/defeat message (e.g., “You lose! Paper beats Rock.”)
* NOTE: Need to pass string values for players’ choices into message for “rock”, “paper”, and “scissors”
* Increment humanScore or computerScore variables by one based on round winner
*/
function playRound(humanChoice, computerChoice) {
    //Insert code here
} //playRound
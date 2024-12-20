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

/*
* Write function: playRound
* Define two parameters to take players’ choices as arguments: humanChoice and computerChoice
* Make humanChoice parameter case-insensitive (i.e., can enter “rock”, “ROCK”, or “Rock”, etc.) - DONE in getHumanChoice()
* Include console.log for string value with victory/defeat message (e.g., “You lose! Paper beats Rock.”)
* NOTE: Need to pass string values for players’ choices into message for “rock”, “paper”, and “scissors”
* Increment humanScore or computerScore variables by one based on round winner
*/
function playRound(humanChoice, computerChoice) {
    console.log("Rock, paper, scissors...shoot!");
    console.log("Player chose " + humanChoice + ", and the computer chose " + computerChoice + ".");
    if (humanChoice === computerChoice) {
        console.log("It's a tie! Both chose " + humanChoice + ".");
        computerScore++;
        humanScore++;
    } else if ((humanChoice === "rock") && (computerChoice === "paper")) {
        console.log("You lose! Paper beats rock.");
        computerScore++;
    } else if ((humanChoice === "rock") && (computerChoice === "scissors")) {
        console.log("You win! Rock beats scissors.");
        humanScore++;
    } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
        console.log("You win! Paper beats rock.");
        humanScore++;
    } else if ((humanChoice === "paper") && (computerChoice === "scissors")) {
        console.log("You lose! Scissors beats paper.");
        computerScore++;
    } else if ((humanChoice === "scissors") && (computerChoice === "rock")) {
        console.log("You lose! Rock beats scissors.");
        computerScore++;
    } else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
        console.log("You win! Scissors beats paper.");
        humanScore++;
    } //if
    console.log("Player: " + humanScore + " Computer: " + computerScore);
} //playRound

const humanSelection = getHumanChoice(); //Stores player input
const computerSelection = getComputerChoice(); //Stores computer

playRound(humanSelection, computerSelection); //Play one round of the game
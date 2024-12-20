//JS file for running Rock, Paper, Scissors
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

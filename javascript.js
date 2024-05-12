//keeping track of the players scores
var humanScore = 0;
var computerScore = 0;

//getComputerChoice(): generates a random RPS choice for computer and returns it
function getComputerChoice () {
    //Expected value for randomVal = 0, 1 or 2
    var randomVal = Math.floor(Math.random() * 3);
    var returnVal;

    if (randomVal == 0) {
        returnVal = "rock";
    }
    else if (randomVal == 1) {
        returnVal = "paper";
    }
    else {
        returnVal = "scissors";
    }

    return returnVal;
}

//getHumanChoice(): returns a valid RPS user input. Will keep on prompting user for a valid RPS choice if it was invalid 
function getHumanChoice () {
    var choice = prompt("Rock? Paper? Scissors?");

    //verify if human choice is valid. if it is, return
    //if input is invalid, prompt user again until a valid response is received
    
    while (choice.toLowerCase() != "rock" && choice.toLowerCase() != "paper" && choice.toLowerCase() != "scissors") {
        choice = prompt(`The input was invalid. 
        Please choose either one of the following: 
        Rock, Paper, Scissors`);
    }
    
    return choice.toLowerCase();
}

//playRound(): takes human and computer players arguments, increments the round winner's score and logs a winner annoucement
function playRound(humanChoice, computerChoice) {
    //rock > scissors
    //scissors > paper
    //paper > rock
    //same choice? tied. no points incremented
    if (humanChoice == computerChoice) {
        console.log(`It's a tie!`);
    }
    else {
        switch (humanChoice) {
            case `rock`:
                if (computerChoice == `scissors`) {
                    humanScore++;
                    console.log("You win! Rock beats Scissors!");
                }
                else if (computerChoice == `paper`) { 
                    computerScore++;
                    console.log("You lose! Paper beats Rock.");
                }
                break;
            case `paper`:
                if (computerChoice == `rock`) {
                    humanScore++;
                    console.log("You win! Paper beats Rock!");
                }
                else if (computerChoice == `scissors`) { 
                    computerScore++
                    console.log("You lose! Scissors beats Paper.")
                }
                break;
            case `scissors`:
                if (computerChoice == `paper`) {
                    humanScore++;
                    console.log("You win! Scissors beats Paper!");
                }
                else if (computerChoice == `rock`) {
                    computerScore++;
                    console.log("You lose! Rock beats Scissors.")
                }
                break;
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
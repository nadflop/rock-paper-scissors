/* Global variables for score keeping and also to add stuffs on the result div*/
var playerScore = 0;
var computerScore = 0;

const container = document.querySelector("#result");
const winner = document.querySelector("#finalResult");
const result = document.querySelector("#gameResult");
const score = document.querySelector("#score");
const btn = document.querySelectorAll("button");

btn.forEach(button => {
    button.addEventListener("click", getPlayerChoice)
});

//getComputerChoice(): generates a random RPS choice for computer and returns it
function getComputerChoice () {
    var randomVal = Math.floor(Math.random() * 3);
    var returnVal;

    switch(randomVal) {
        case 0:
            returnVal = "rock";
            break;
        case 1:
            returnVal = "paper";
            break;
        default:
            returnVal = "scissors";
            break;
    }
    return returnVal;
}

function getPlayerChoice(event) {
    if (playerScore >= 5 || computerScore >= 5) return;
    const playerChoice = event.target.id;
    playRound(playerChoice, getComputerChoice());
}

//_getWinner(): a helper function that compares the scores and declares the winner
function _getWinner() {
    if (playerScore != 5 && computerScore != 5) return;

    if (playerScore > computerScore) {
        winner.textContent = "Game over. You win!";
    }
    else if (playerScore < computerScore) {
        winner.textContent = "Game over. You lost.";
    }
}

//playRound(): takes player and computer players arguments, increments the round winner's score and logs a winner annoucement
function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        result.textContent = "It's a tie!";
    }
    else {
        switch (humanChoice) {
            case `rock`:
                if (computerChoice == `scissors`) {
                    playerScore++;
                    result.textContent = "You win! Rock beats Scissors!";
                }
                else if (computerChoice == `paper`) { 
                    computerScore++;
                    result.textContent = "You lose! Paper beats Rock!";
                }
                break;
            case `paper`:
                if (computerChoice == `rock`) {
                    playerScore++;
                    result.textContent = "You win! Paper beats Rock!";
                }
                else if (computerChoice == `scissors`) { 
                    computerScore++
                    result.textContent = "You lose! Scissors beats Paper.";
                }
                break;
            case `scissors`:
                if (computerChoice == `paper`) {
                    playerScore++;
                    result.textContent = "You win! Scissors beats Paper!";
                }
                else if (computerChoice == `rock`) {
                    computerScore++;
                    result.textContent = "You lose! Rock beats Scissors.";
                }
                break;
        }
    }
    //update the scores
    score.textContent = `${playerScore} - ${computerScore}`;
    _getWinner();
}    
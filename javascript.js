/* Global variables for score keeping and also to add stuffs on the result div*/
var humanScore = 0;
var computerScore = 0;

const container = document.querySelector("#result");
const winner = document.querySelector("#finalResult");

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

//_getWinner(): a helper function that compares the scores and declares the winner
function _getWinner() {
    if (humanScore != 5 && computerScore != 5) return;

    if (humanScore > computerScore) {
        winner.textContent = ">>>You win!";
    }
    else if (humanScore < computerScore) {
        winner.textContent = ">>>You lose :(";
    }
    else { //humanScore == computerScore
        winner.textContent = ">>>It's a tie.";
    }

}

//_resetScores(): a helper function that resets the scores and final result once one player reaches 5 points
function _resetScores() {
    if (humanScore == 5 || computerScore == 5) {
        //reset them
        humanScore = 0;
        computerScore = 0;
        winner.textContent = "";
    }
}

//playGame(): calls playRound 5 times, keeps track of the scores and declares winner at the end
function playGame() {
    const result = document.querySelector("#gameResult");
    const score = document.querySelector("#score");

    //playRound(): takes human and computer players arguments, increments the round winner's score and logs a winner annoucement
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            result.textContent = "It's a tie!";
        }
        else {
            switch (humanChoice) {
                case `rock`:
                    if (computerChoice == `scissors`) {
                        humanScore++;
                        result.textContent = "You win! Rock beats Scissors!";
                    }
                    else if (computerChoice == `paper`) { 
                        computerScore++;
                        result.textContent = "You lose! Paper beats Rock!";
                    }
                    break;
                case `paper`:
                    if (computerChoice == `rock`) {
                        humanScore++;
                        result.textContent = "You win! Paper beats Rock!";
                    }
                    else if (computerChoice == `scissors`) { 
                        computerScore++
                        result.textContent = "You lose! Scissors beats Paper.";
                    }
                    break;
                case `scissors`:
                    if (computerChoice == `paper`) {
                        humanScore++;
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
        score.textContent = `Human Score: ${humanScore}; Computer Score: ${computerScore}`;
        _getWinner();
    }
    
    var playerSelection = '';
    var computerSelection = '';

    const btn1 = document.querySelector("#rock");
    btn1.addEventListener("click", () => {
        _resetScores();
        playerSelection = 'rock';
        computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection);
    });

    const btn2 = document.querySelector("#paper");
        btn2.addEventListener("click", () => { 
        _resetScores();
        playerSelection = 'paper';
        computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection);
    });

    const btn3 = document.querySelector("#scissor");
    btn3.addEventListener("click", () => {
        _resetScores();
        playerSelection = 'scissors';
        computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection);
    });
}

playGame();
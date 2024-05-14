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
function _getWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log(`You win! Human wins RPS.
        Human Score: ${humanScore}
        Computer Score: ${computerScore}`)
    }
    else if (humanScore < computerScore) {
        console.log(`You lose :( Computer wins RPS.
        Human Score: ${humanScore}
        Computer Score: ${computerScore}`)
    }
    else { //humanScore == computerScore
        console.log(`It's a tie! The scores are tied.
        Human Score: ${humanScore}
        Computer Score: ${computerScore}`);
    }
}

//playGame(): calls playRound 5 times, keeps track of the scores and declares winner at the end
function playGame() {
    //keeping track of the players scores
    var humanScore = 0;
    var computerScore = 0;

    //playRound(): takes human and computer players arguments, increments the round winner's score and logs a winner annoucement
    function playRound(humanChoice, computerChoice) {
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
    
    const computerSelection = getComputerChoice();

    const btn1 = document.querySelector("#rock");
    btn1.addEventListener("click", () => {
        console.log("Rock is clicked!");
        playRound('rock',computerSelection);
    });

    const btn2 = document.querySelector("#paper");
        btn2.addEventListener("click", () => {
        console.log("Paper is clicked!");
        playRound('paper',computerSelection);
    });

    const btn3 = document.querySelector("#scissor");
    btn3.addEventListener("click", () => {
        console.log("Scissors is clicked!");
        playRound('scissors',computerSelection);
    });
    
    //declares winner
    //_getWinner(humanScore, computerScore);
    
}


playGame();


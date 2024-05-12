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

function getHumanChoice () {
    var choice = prompt("Rock? Paper? Scissors?");

    //verify if human choice is valid. if it is, return
    //if input is invalid, prompt user again
    
    while (choice.toLowerCase() != "rock" && choice.toLowerCase() != "paper" && choice.toLowerCase() != "scissors") {
        choice = prompt(`The input was invalid. Please choose either one of the following: Rock, Paper, Scissors`);
    }
    
}

console.log("computer choice:");
console.log(getComputerChoice());
console.log("human choice");
console.log(getHumanChoice());
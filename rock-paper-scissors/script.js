const choices = ["rock", "paper", "scissors"];

const winsAgainst = {
    "rock": "scissors",
    "papar": "rock",
    "scissors": "paper"
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * choices.length)
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionLowerCase = playerSelection.toLowerCase();
    if (playerSelectionLowerCase == computerSelection) {
        return `Tie! Both played ${playerSelectionLowerCase}`
    } else if(winsAgainst[playerSelectionLowerCase] == computerSelection) {
        return `You win! ${playerSelectionLowerCase} beats ${computerSelection}`
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`
    }
}

function game() {
    let playerWin = 0
    let computerWin = 0
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose between rock, paper, and scissors:")
        let result = playRound(playerSelection ,getComputerChoice())
        if (result.includes("win")) playerWin++
        else if (result.includes("lose")) computerWin++
    }
    if(playerWin > computerWin){
        return `You won ${playerWin} - ${computerWin}`
    } else if (computerWin > playerWin) {
        return `You lost ${playerWin} - ${computerWin}`
    } else {
        return `You tied ${playerWin} - ${computerWin}`
    }
}


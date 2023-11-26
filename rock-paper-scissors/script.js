const choices = ["rock", "paper", "scissors"];

const winsAgainst = {
    "rock": "scissors",
    "papar": "rock",
    "scissors": "paper"
}

let playerWin = 0;
let computerWin = 0; 

const rockbtn = document.querySelector('#rock');
rockbtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
})

const paperbtn = document.querySelector('#paper');
paperbtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
})

const scissorsbtn = document.querySelector("#scissors");
scissorsbtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
})

const restartDiv = document.querySelector(".restart");
    restartDiv.addEventListener("click", () => {
            playerWin=0;
            computerWin=0; 
            const lastResultDiv = document.querySelector(".last-result");
            lastResultDiv.textContent = "";
            const scoreDiv = document.querySelector(".score");
            scoreDiv.textContent = `Current score: 0 - 0`;
            const finalDev = document.querySelector(".final");
            finalDev.textContent = "";
            finalDev.style.border = "0px";
            enableButtons();
        })

function changeScore(text) {
    const lastResultDiv = document.querySelector(".last-result");
    lastResultDiv.textContent = "Last match result: " + text;
    const scoreDiv = document.querySelector(".score");
    scoreDiv.textContent = `Current score: ${playerWin} - ${computerWin}`;
}


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * choices.length)
    return choices[randomNumber];
}

function disableButtons(){
    const rockbtn = document.querySelector('#rock');
    rockbtn.disabled = true;
    const paperbtn = document.querySelector('#paper');
    paperbtn.disabled = true;
    const scissorsbtn = document.querySelector("#scissors");
    scissorsbtn.disabled = true;
}

function enableButtons(){
    const rockbtn = document.querySelector('#rock');
    rockbtn.disabled = false;
    const paperbtn = document.querySelector('#paper');
    paperbtn.disabled = false;
    const scissorsbtn = document.querySelector("#scissors");
    scissorsbtn.disabled = false;
}

function checkIfFinished() {
    const finalDev = document.querySelector(".final");
    if(playerWin == 5) {
        finalDev.style.border = "10px solid red";
        finalDev.textContent = "You won against the computer!"
        disableButtons();
    } else if(computerWin == 5) {
        finalDev.style.border = "10px solid blue";
        finalDev.textContent = "You lost against the computer!"
        disableButtons();
    }
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionLowerCase = playerSelection.toLowerCase();
    if (playerSelectionLowerCase == computerSelection) {
        changeScore("It was a tie!");
        return `Tie! Both played ${playerSelectionLowerCase}`
    } else if(winsAgainst[playerSelectionLowerCase] == computerSelection) {
        playerWin++;
        checkIfFinished();
        changeScore("You won!");
        return `You win! ${playerSelectionLowerCase} beats ${computerSelection}`
    } else {
        computerWin++;
        checkIfFinished();
        changeScore("You lost!");
        return `You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`
    }
}

/*
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
*/


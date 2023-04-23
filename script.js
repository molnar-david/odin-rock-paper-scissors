const HAND_CHOICES = ["rock", "paper", "scissors"];
const scoreToWin = 5;
let playerScore = 0;
let computerScore = 0;
let playerChoice;

const inputs = document.querySelectorAll("input");
inputs.forEach((i) => {
    i.addEventListener("click", (e) => {
        playerChoice = e.target.getAttribute("class");
        game();
    })
});

const result = document.querySelector("#result");

function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Kept for compatibility
function getPlayerChoice() {
    return playerChoice;
}

function getComputerChoice() {
    return HAND_CHOICES[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (HAND_CHOICES.includes(playerSelection)) {
        if (playerSelection === computerSelection) {
            return "Tie!";
        } else if((HAND_CHOICES.indexOf(playerSelection) + 2) % 3 === HAND_CHOICES.indexOf(computerSelection)) {
            playerScore++;
            return `Player wins! ${capitalizeString(playerSelection)} beats ${computerSelection}!`;
        } else if((HAND_CHOICES.indexOf(playerSelection) + 1) % 3 === HAND_CHOICES.indexOf(computerSelection)) {
            computerScore++;
            return `Computer wins! ${capitalizeString(computerSelection)} beats ${playerSelection}!`;
        }
    }
}

function game() {
    if (Math.max(playerScore, computerScore) === scoreToWin) {
        return;
    } else {
        result.textContent = `${playRound(getPlayerChoice(), getComputerChoice())} ${playerScore}-${computerScore}`;
    }

    if (Math.max(playerScore, computerScore) === scoreToWin) {
        const finalResult = document.createElement("div");

        if (playerScore === computerScore) {
            finalResult.textContent += `Game over! Tie ${playerScore}-${computerScore}! This shouldn't be possible...`;
        } else if(playerScore > computerScore) {
            finalResult.textContent += `Game over! Player wins ${playerScore}-${computerScore}!`;
        } else {
            finalResult.textContent += `Game over! Computer wins ${playerScore}-${computerScore}!`;
        }

        finalResult.setAttribute("id", "final-result");
        const container = document.querySelector("#container");
        container.appendChild(finalResult);
    } 
}

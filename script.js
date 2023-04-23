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
            return `You win! ${playerSelection} beats ${computerSelection}!`;
        } else if((HAND_CHOICES.indexOf(playerSelection) + 1) % 3 === HAND_CHOICES.indexOf(computerSelection)) {
            computerScore++;
            return `You lose! ${computerSelection} beats ${playerSelection}!`;
        }
    }
}

function game() {
    if (Math.max(playerScore, computerScore) < scoreToWin) {
        console.log(`${playRound(getPlayerChoice(), getComputerChoice())} ${playerScore}-${computerScore}`);
    }
    
    if (Math.max(playerScore, computerScore) >= scoreToWin) {
        if (playerScore === computerScore) {
            console.log(`Final result: Tie ${playerScore}-${computerScore}! This shouldn't be possible...`)
        } else if(playerScore > computerScore) {
            console.log(`Final result: You win ${playerScore}-${computerScore}!`)
        } else {
            console.log(`Final result: You lose ${playerScore}-${computerScore}!`)
        }
    }
}

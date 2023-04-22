const HAND_CHOICES = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getPlayerChoice() {
    return prompt("Play your hand!").toLowerCase();
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
    } else {
        // Unknown hand played
        return playRound(getPlayerChoice(), getComputerChoice());
    }
}

function game(rounds) {
    for(let i=0; i<rounds; i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
    if (playerScore === computerScore) {
        console.log(`Final result: Tie ${playerScore}-${computerScore}!`)
    } else if(playerScore > computerScore) {
        console.log(`Final result: You win ${playerScore}-${computerScore}!`)
    } else {
        console.log(`Final result: You lose ${playerScore}-${computerScore}!`)
    }
}

game(5);
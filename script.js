const HAND_CHOICES = ["rock", "paper", "scissors"];

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
            return  `You win! ${playerSelection} beats ${computerSelection}!`;
        } else if((HAND_CHOICES.indexOf(playerSelection) + 1) % 3 === HAND_CHOICES.indexOf(computerSelection)) {
            return `You lose! ${computerSelection} beats ${playerSelection}!`;
        }
    } else {
        // Unknown hand played
        playRound(getPlayerChoice(), getComputerChoice());
    }
}

alert(playRound(getPlayerChoice(), getComputerChoice()));
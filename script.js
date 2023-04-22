const HAND_CHOICES = ["rock", "paper", "scissors"];

function getPlayerChoice() {
    return prompt("Play your hand!").toLowerCase();
}

function getComputerChoice() {
    return HAND_CHOICES[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    console.log(`You play: ${playerSelection}`);

    if (HAND_CHOICES.includes(playerSelection)) {
        console.log(`Computer plays: ${computerSelection}`);

        if (playerSelection === computerSelection) {
            console.log("Tie!");
        } else if((HAND_CHOICES.indexOf(playerSelection) + 2) % 3 === HAND_CHOICES.indexOf(computerSelection)) {
            console.log("You win!");
        } else if((HAND_CHOICES.indexOf(playerSelection) + 1) % 3 === HAND_CHOICES.indexOf(computerSelection)) {
            console.log("You lose!");
        }
    } else {
        console.log("Unknown hand...");
        playRound(getPlayerChoice(), getComputerChoice());
    }
}

playRound(getPlayerChoice(), getComputerChoice());
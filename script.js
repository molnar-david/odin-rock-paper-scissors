const HAND_CHOICES = ["rock", "paper", "scissors"];

function getPlayerChoice() {
    return prompt("Play your hand!").toLowerCase();
}

function getComputerChoice() {
    return HAND_CHOICES[Math.floor(Math.random() * 3)];
}

console.log(getPlayerChoice());
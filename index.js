const choices = ["rock", "scissor", "paper"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("ComputerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playerGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    
    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissor") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissor":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            default:
                result = "Invalid choice. Please choose from 'rock', 'scissor', or 'paper'.";
        }
    }

    // Update player and computer scores
    switch(result) {
        case "YOU WIN!":
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            resultDisplay.classList.add("greenText");
            break;
        case "YOU LOSE!":
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            resultDisplay.classList.add("yellowText");
            break;
        default:
            resultDisplay.classList.remove("greenText", "yellowText");
    }

    // Display result
    playerDisplay.textContent = `PLAYER : ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER : ${computerChoice}`;
    resultDisplay.textContent = result;
}



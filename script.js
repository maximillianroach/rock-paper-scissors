const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const humanScoreDisplay = document.querySelector(".humanScore");
const computerScoreDisplay = document.querySelector(".computerScore");
const buttonBox = document.querySelector(".buttonBox");

function getComputerChoice() {
    let num_choice = Math.trunc(Math.random() * 3);

    if (num_choice === 0) {
        return "rock";
    } else if (num_choice === 1) {
        return "paper";
    } else if (num_choice === 2) {
        return "scissors";
    }

}

// function getHumanChoice() {
//     return prompt(`Choose rock, paper, or scissors:\n(1) rock\n(2) paper\n(3) scissors`);
// }

let humanScore = 0;
let computerScore = 0;

const resultsDisplay = document.querySelector(".results");

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        resultsDisplay.textContent = "You tied. No points awarded.";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        resultsDisplay.textContent = "You win! Rock beats Scissors";
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        resultsDisplay.textContent = "You lose! Paper beats Rock";
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        resultsDisplay.textContent = "You win! Paper beats Rock";
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        resultsDisplay.textContent = "You lose! Scissors beats Paper";
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        resultsDisplay.textContent = "You win! Scissors beats Paper";
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        resultsDisplay.textContent = "You lose! Rock beats Scissors";
        computerScore++;
    }
}

function checkForWinner(){

if (humanScore == 5) {
    resultsDisplay.textContent = `YOU WIN!`;
    playAgain();

} else if (computerScore == 5) {
    resultsDisplay.textContent = `YOU LOSE!`;
    playAgain();
}
}

function updateScores() {
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
}

rockBtn.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
    updateScores();
    checkForWinner();
})

paperBtn.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
    updateScores();
    checkForWinner();
})

scissorsBtn.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
    updateScores();
    checkForWinner();
})

function playAgain() {
   const playAgainButton = document.createElement("button");
   playAgainButton.textContent = "Play Again";

   buttonBox.appendChild(playAgainButton);

   playAgainButton.addEventListener('click', (e) => {
    humanScore = 0;
    computerScore = 0;
    resultsDisplay.textContent = "Let's play a game!";
    updateScores();

    buttonBox.removeChild(playAgainButton);
   })


   
}


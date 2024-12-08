// Global scope variables
let humanScore = 0;
let computerScore = 0;

// Function to get the computer's choice
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerChoice = '';
  if (randomNumber == 1) {
    computerChoice = "Rock";
  }
  else if (randomNumber == 2) {
    computerChoice = "Paper";
  }
  else {
    computerChoice = "Scissors";
  }
  return computerChoice;
}

// Get human's choice
  const rockBtn = document.querySelector("#rock");
  const paperBtn = document.querySelector("#paper");
  const scissorsBtn = document.querySelector("#scissors");
// Event listeners to the buttons
  rockBtn.addEventListener('click', () => {
    playRound("Rock");
  })
  paperBtn.addEventListener('click', () => {
    playRound("Paper");
  });
  scissorsBtn.addEventListener('click', () => {
    playRound("Scissors");
  });

// Function to play
function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  const score = document.querySelector("#score");
  const result = document.querySelector("#result");
  if (humanChoice == computerChoice) {
    result.textContent = `You both chose ${humanChoice}. It's a tie!`;
  } else if (humanChoice == "Rock" && computerChoice == "Scissors" || 
            humanChoice == "Scissors" && computerChoice == "Paper" ||
            humanChoice == "Paper" && computerChoice == "Rock"){
    result.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    humanScore++;
  } else {
    result.textContent = `You lose. ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  }
  score.innerHTML = `Score <br> You: ${humanScore} Computer: ${computerScore}`;
};

// Reset scores
const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener('click', () => {
  humanScore = 0;
  computerScore = 0;
  result.textContent = ``;
  score.innerHTML = `Score <br> You: ${humanScore} Computer: ${computerScore}`;
});
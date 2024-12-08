// Global scope variables
let humanScore = 0;
let computerScore = 0;

// Function to get the computer's choice
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerChoice = '';
  if (randomNumber == 1) {
    computerChoice = "rock";
  }
  else if (randomNumber == 2) {
    computerChoice = "paper";
  }
  else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

// Function to get human's choice
function getHumanChoice() {
  let humanChoice = prompt("Rock, Paper, or Scissors?");
  humanChoice = humanChoice.toLowerCase();
  while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
    humanChoice = prompt("Invalid input. Please choose Rock, Paper, or Scissors:").toLowerCase();
  }
  return humanChoice;
}

// Function to determine the winner of a round
function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  if (humanChoice == computerChoice) {
    console.log(`You chose ${humanChoice}, computer chose ${computerChoice}. It's a tie!`);
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log(`You chose ${humanChoice}, computer chose ${computerChoice}. You win! Rock beats Scissors.`);
    humanScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log(`You chose ${humanChoice}, computer chose ${computerChoice}. You win! Scissors beats Paper.`);
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log(`You chose ${humanChoice}, computer chose ${computerChoice}. You win! Paper beats Rock.`);
    humanScore++;
  } else {
    console.log(`You chose ${humanChoice}, computer chose ${computerChoice}. You lose.`);
    computerScore++;
  }
};

//function to play the game 5 times
function playGame() {
  for (let round = 0; round < 5; round++) {
    playRound();
    console.log(`Scores - You: ${humanScore}, Computer: ${computerScore}`);
  }
}

playGame();
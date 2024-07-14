/*
THIS IS A DIFFERENT EXERCISE (testing knowledge of if statements and booleans)
const age = 4;
const isHoliday = true;

if ((age <= 6 || age >= 60) && !isHoliday) {
  console.log('Discount');
} else {
  console.log('No discount');
} */
let userScore = 0;
let computerScore = 0;

// Function to play the game
function playGame(userMove){
// Generate a random move for the computer
const randomNumber = Math.random();
let computerMove = '';
  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1){
    computerMove = 'scissors';
  }

// Compare the moves and determine the result
  let result = '';
  if (userMove === computerMove) {
    result = 'Tie.';
  } else if (
    (userMove === 'rock' && computerMove === 'scissors') ||
    (userMove === 'paper' && computerMove === 'rock') ||
    (userMove === 'scissors' && computerMove === 'paper')
  ){
    result = 'You win!';
    userScore++;
  } else {
    result = 'You lose!'
    computerScore++;
  }
// Update the score display
  document.getElementById('userScore').textContent = userScore;
  document.getElementById('computerScore').textContent = computerScore;
// Show the result in an alert
  alert(`You picked ${userMove}, computer picked ${computerMove}. ${result}`)
}

//reset the scores
function resetScores(){
  userScore = 0;
  computerScore = 0;
// Update the score display
  document.getElementById('userScore').textContent = userScore;
  document.getElementById('computerScore').textContent = computerScore;
// Show the result in an alert
  alert('Scores have been reset!');
}

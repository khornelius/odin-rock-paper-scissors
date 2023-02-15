"use strict";

function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors'];
  let randomNum = Math.floor(Math.random() * options.length);
  return options[randomNum];
}

function playRound(playerSelection, computerSelection) {
  switch (true) {
    case (playerSelection === computerSelection):
      ties++;
      div.textContent = `You both picked ${playerSelection}, it's a tie! The score so far is ${playerWins}-${computerWins}-${ties}`;
      break;
    case (playerSelection === 'rock' && computerSelection === 'scissors'):
    case (playerSelection === 'paper' && computerSelection === 'rock'):
    case (playerSelection === 'scissors' && computerSelection === 'paper'):
      playerWins++;
      div.textContent = `${playerSelection} beats ${computerSelection}, you win! The score so far is ${playerWins}-${computerWins}-${ties}`;
      break;
    default:
      computerWins++;
      div.textContent = `${computerSelection} beats ${playerSelection}, you lose! The score so far is ${playerWins}-${computerWins}-${ties}`;
  }
}

function checkScores() {
  if (playerWins === 5 || computerWins === 5) {
    winner = (playerWins > computerWins) ? 'player' : 'computer';
    div.textContent = `The ${winner} has won the game! The score was ${playerWins}-${computerWins}-${ties}`;
    buttons.forEach((button) => {
      button.removeEventListener('click', game);
    });

    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Play Again'
    resetBtn.addEventListener('click', () => {
      location.reload();
    });
    document.body.appendChild(resetBtn);
  }
}

function game() {
  playRound(this.id, getComputerChoice());
  checkScores();
}

let playerWins = 0;
let computerWins = 0;
let ties = 0;
let result;
let winner;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', game);
});

const div = document.createElement('div');
document.body.appendChild(div);
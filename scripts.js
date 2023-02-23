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
      tiesDisplay.textContent = `Ties: ${ties}`;
      resultsDiv.textContent = `You both picked ${playerSelection}, it's a tie!`;
      break;
    case (playerSelection === 'rock' && computerSelection === 'scissors'):
    case (playerSelection === 'paper' && computerSelection === 'rock'):
    case (playerSelection === 'scissors' && computerSelection === 'paper'):
      playerWins++;
      playerScoreDisplay.textContent = `Player score: ${playerWins}`;
      resultsDiv.textContent = `${playerSelection} beats ${computerSelection}, you win this round!`;
      break;
    default:
      computerWins++;
      computerScoreDisplay.textContent = `Computer score: ${computerWins}`;
      resultsDiv.textContent = `${computerSelection} beats ${playerSelection}, you lose this round!`;
  }
}

function checkScores() {
  if (playerWins === 5 || computerWins === 5) {
    winner = (playerWins > computerWins) ? 'player' : 'computer';
    resultsDiv.textContent = `The ${winner} has won the game! The score was ${playerWins}-${computerWins}-${ties}`;
    choices.forEach((img) => {
      img.removeEventListener('click', game);
    });

    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Play Again'

    resetBtn.addEventListener('click', () => {
      location.reload();
    });
    containerDiv.appendChild(resetBtn);
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

const choices = document.querySelectorAll('img');
choices.forEach((img) => {
  img.addEventListener('click', game);
});

const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const tiesDisplay = document.querySelector('#ties');
const containerDiv = document.querySelector('.container');
const resultsDiv = document.querySelector('.results');
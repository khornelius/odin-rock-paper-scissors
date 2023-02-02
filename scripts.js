"use strict";

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  if (randomNum === 1) {
    return 'rock';
  } else if (randomNum === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function getPlayerChoice() {
  let input;
  do {
    input = prompt("Rock, Paper or Scissors?");
    input = input.toLowerCase();
  } while (!(input === 'rock' || input === 'paper' || input === 'scissors'));
  return input;
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case computerSelection:
      return "tie";
    case 'rock':
      return (computerSelection === 'paper') ? "loss" : "win";
    case 'paper':
      return (computerSelection === 'scissors') ? "loss" : "win";
    case 'scissors':
      return (computerSelection === 'rock') ? "loss" : "win";
    default:
      return;
  }
}

function game() {
  let wins = 0;
  let losses = 0;
  let ties = 0;
  let winner;

  for (let i = 0; i < 5; i++) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if (result === 'win') {
      console.log(`${playerSelection} beats ${computerSelection}. You win this round.`);
      wins++;
    } else if (result === 'loss') {
      console.log(`${computerSelection} beats ${playerSelection}. You lose this round.`);
      losses++;
    } else if (result === 'tie') {
      console.log(`${computerSelection} ties with ${playerSelection}. No winner this round.`);
      ties++;
    }
  }

  if (wins > losses) {
    winner = 'player';
  } else if (losses > wins) {
    winner = 'computer';
  } else {
    winner = 'none';
  }

  console.log((winner === 'player') ? "You win!" : (winner === 'none') ? "It's a tie!" : "You lose!");
  console.log(`The score was ${wins}-${losses}-${ties}.`);
}

game();
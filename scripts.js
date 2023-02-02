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

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

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
      return "Invalid choice, please enter either Rock, Paper or Scissors."
  }
}

function game() {
  let wins = 0;
  let losses = 0;
  let ties = 0;
  let winner;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, Paper or Scissors?");
    let computerSelection = getComputerChoice();
    console.log(`${playerSelection} vs. ${computerSelection}`)
    let result = (playRound(playerSelection, computerSelection));
    console.log(result);
    if (result === 'win') {
      wins++;
    } else if (result === 'loss') {
      losses++;
    } else {
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
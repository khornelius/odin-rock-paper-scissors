"use strict";

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  if (randomNum === 1) {
    return 'Rock';
  } else if (randomNum === 2) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "It's a tie!"
  } if (playerSelection === 'rock') {
    return (computerSelection === 'paper') ? "You lose! Paper beats Rock" : "You win! Rock beats scissors";
  } else if (playerSelection === 'paper') {
    return (computerSelection === 'scissors') ? "You lose! Scissors beat Paper" : "You win! Paper beats Rock!";
  } else if (playerSelection === 'scissors') {
    return (computerSelection === 'rock') ? "You lose! Rock beats Scissors" : "You win! Scissors beat paper!";
  } else {
    return "Invalid choice, please enter either Rock, Paper or Scissors."
  }
}

let playerSelection = 'scissors';
let computerSelection = 'paper';

// let playerSelection = prompt("Rock, Paper or Scissors?")
// let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
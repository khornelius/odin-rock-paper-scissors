"use strict";

console.log("Hello, world!");

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

console.log(getComputerChoice());
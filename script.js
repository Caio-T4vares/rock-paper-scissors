let player1Choice = "";
let weapons = ["rock", "paper", "scissor"];

function getHumanChoice() {
  let choice = prompt(`Choose your weapon (${weapons.join()}) :`).toLowerCase();

  if (weapons.includes(choice)) {
    player1Choice = choice;
  } else {
    alert("Invalid option, please choose again.");
  }
}

function getComputerChoice() {
  return weapons[generateRandomNumber()];
}

function generateRandomNumber() {
  return Math.floor(Math.random() * weapons.length);
}

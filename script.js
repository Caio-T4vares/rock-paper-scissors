let options = ["rock", "paper", "scissor"];
let humanScore = 0;
let computerScore = 0;
let drawsCount = 0;

function getHumanChoice() {
  let choice = prompt(`Choose your weapon (${options.join()}) :`).toLowerCase();

  if (!options.includes(choice)) {
    console.log("Invalid option, please choose again.");
    return;
  }
  return choice;
}

function getComputerChoice() {
  return options[generateRandomNumber()];
}

function generateRandomNumber() {
  return Math.floor(Math.random() * weapons.length);
}

function playRound() {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      console.log("You lose! Paper beats Rock");
      computerScore++;
    } else if (computerChoice === "scissor") {
      console.log("You win! Rock beats Scissor");
      humanScore++;
    } else {
      console.log("Draw!");
      drawsCount++;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("You win! Paper beats Rock");
      humanScore++;
    } else if (computerChoice === "scissor") {
      console.log("You lose! Scissor beats Paper");
      computerScore++;
    } else {
      console.log("Draw!");
      drawsCount++;
    }
  } else {
    if (computerChoice === "rock") {
      console.log("You lose! Rock beats Scissor");
      computerScore++;
    } else if (computerChoice === "paper") {
      console.log("You win! Scissor beats Paper");
      computerScore++;
    } else {
      console.log("Draw!");
      drawsCount++;
    }
  }
}

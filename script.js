let options = ["rock", "paper", "scissor"];
let drawsCount = 0;
let computerScore = 0;
let humanScore = 0;

let buttonContainer = document.querySelector(".option-container");
let resultDiv = document.querySelector("#result");
let humanScoreboard = document.querySelector("#human-score");
let computerScoreboard = document.querySelector("#computer-score");

buttonContainer.addEventListener("click", (e) => {
  playRound(e.target.id);
});

chooseButtons.addEventListener;

function getComputerChoice() {
  return options[generateRandomNumber()];
}

function generateRandomNumber() {
  return Math.floor(Math.random() * options.length);
}

function playRound(humanChoice) {
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

  computerScoreboard.textContent = computerScore;
  humanScoreboard.textContent = humanScore;
}

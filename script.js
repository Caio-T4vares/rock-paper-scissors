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
      computerScore++;
    } else if (computerChoice === "scissor") {
      humanScore++;
    } else {
      drawsCount++;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore++;
    } else if (computerChoice === "scissor") {
      computerScore++;
    } else {
      drawsCount++;
    }
  } else {
    if (computerChoice === "rock") {
      computerScore++;
    } else if (computerChoice === "paper") {
      computerScore++;
    } else {
      drawsCount++;
    }
  }

  if (computerScore === 5) {
    alert("Computer wins!");
    computerScore = 0;
    humanScore = 0;
  } else if (humanScore === 5) {
    alert("Human wins!");
    humanScore = 0;
    computerScore = 0;
  }

  computerScoreboard.textContent = computerScore;
  humanScoreboard.textContent = humanScore;
}

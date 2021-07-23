//This will get the button record of button clicked in an html page.

const startGameBtn = document.getElementById("start-game-btn");

// Constant for rock.

const ROCK = "ROCK";

//constant for paper

const PAPER = "PAPER";

//constant for scissors

const SCISSORS = "SCISSORS";

//If player don't choose anything or choose any garbage value.

const DEFAULT_CHOICE = "ROCK";

//If game draw between player and computer

const GAME_DRAW = "Draw";

//if player wins

const PLAYER_WIN = "PLAYER_WIN";

//if computer win

const COMPUTER_WIN = "COMPUTER_WIN";

//this variable is to check if game is running or not

let isGameRunning = false;

//This function will get the player choice.

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}?`).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert("Invalid Selection. We Selected " + DEFAULT_CHOICE + " for you!");
    return DEFAULT_CHOICE;
  }
  return selection;
};

//This function will get the computer choice based on random numbers

const getComputerChoice = () => {
  const selection = Math.random();
  if (selection < 0.33) {
    return ROCK;
  } else if (selection < 0.66) {
    return SCISSORS;
  } else {
    return PAPER;
  }
};

//This function will decide the winner it takes two arguments player choice and computer choice

const getWinner = (pChoice, cChoice) => {
  if (pChoice === cChoice) {
    return GAME_DRAW;
  }
  if (
    (pChoice === ROCK && cChoice === SCISSORS) ||
    (pChoice === PAPER && cChoice === ROCK) ||
    (pChoice === SCISSORS && cChoice === PAPER)
  ) {
    return PLAYER_WIN;
  } else {
    return COMPUTER_WIN;
  }
};

//This is where we are listening the click of the html document.

/*This includes a anonymous fucntion which takes care of the operations we nee when the button is pressed in the game.*/

startGameBtn.addEventListener("click", () => {
  if (isGameRunning) {
    return;
  }
  isGameRunning = true;
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const getResult = getWinner(playerSelection, computerSelection);
  console.log("Computer Chose: " + computerSelection);
  console.log("Player Chose: " + playerSelection);
  console.log("The Result is " + getResult);
  isGameRunning = false;
});

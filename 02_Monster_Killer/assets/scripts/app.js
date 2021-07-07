const ATTACK_VALUE = 10; //This is the attack value for a player when player launch attack.
const STRONG_ATTACK_VALUE = 14; //This is the strong attack value when player launch strong attack.
const MONSTER_ATTACK_VALUE = 12; //This is the monster attack value when monster launch attack.
const HEAL_VALUE = 16; //This is the heal value when player heal himself.
const MODE_ATTACK = "ATTACK"; //This is the mode attack to check which attack player does.
const MODE_STRONG_ATTACK = "STRONG_ATTACK"; //This is the mode attack to check which attack player does.
const EVENT_LOG_PLAYER_ATTACK = "PLAYER_ATTACK"; //Log value to check event player attack
const EVENT_LOG_PLAYER_SUPER_ATTACK = "PLAYER_SUPER_ATTACK"; //log value to check event player super attack
const EVENT_LOG_MONSTER_ATTACK = "MONSTER_ATTACK"; //log value to check event monster attack.
const EVENT_LOG_PLAYER_HEAL = "PLAYER_HEAL"; //log value to check event player heal.
const EVENT_LOG_GAME_OVER = "GAME_OVER"; //log value to check event game over.
let battle_log = []; //This is the array which will handle all the logs of the battle.

//This is the function which will write all the logs of the battle to the battle log array.
function writeToLog(event, val, playerHealth, monsterHealth) {
  let log;
  switch (event) {
    case EVENT_LOG_PLAYER_ATTACK:
      log = {
        event: event,
        val: val,
        target: "monster",
        playerHealth: playerHealth,
        monsterHealth: monsterHealth,
      };
      break;
    case EVENT_LOG_PLAYER_SUPER_ATTACK:
      log = {
        event: event,
        val: val,
        target: "monster",
        playerHealth: playerHealth,
        monsterHealth: monsterHealth,
      };
      break;
    case EVENT_LOG_PLAYER_HEAL:
      log = {
        event: event,
        val: val,
        target: "player",
        playerHealth: playerHealth,
        monsterHealth: monsterHealth,
      };
      break;
    case EVENT_LOG_MONSTER_ATTACK:
      log = {
        event: event,
        val: val,
        target: "player",
        playerHealth: playerHealth,
        monsterHealth: monsterHealth,
      };
      break;
    case EVENT_LOG_GAME_OVER:
      log = {
        event: event,
        val: val,
        playerHealth: playerHealth,
        monsterHealth: monsterHealth,
      };
      break;
    default:
      log = {};
  }

  battle_log.push(log);
}

//This is the prompt which asks initial health from player and monster when the game begins

const enteredHealthValue = prompt(
  "Maximum life for you and the monster.",
  "100"
);

//This is the max health player chosen.
let chosenMaxHealth = parseInt(enteredHealthValue);
// This is the condition to check if the entered value in prompt from player  is correct or not
if (isNaN(chosenMaxHealth) || chosenMaxHealth <= 0) {
  chosenMaxHealth = 100;
}

let currentMonsterHealth = chosenMaxHealth; //This is the current Monster health
let currentPlayerHealth = chosenMaxHealth; //This is the current player health
let hasBonusLife = true; //This is the variable to determine if I have bounus life or not.

//This function will add the health value to the website with our chosen health value
adjustHealthBars(chosenMaxHealth);

//This is the function to determine if we have finished the game or not.
function endGame() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(
    EVENT_LOG_MONSTER_ATTACK,
    playerDamage,
    currentPlayerHealth,
    currentMonsterHealth
  );
  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    currentPlayerHealth = initialPlayerHealth;
    alert("you would be dead but you got bonus life.");
    removeBonusLife();
    setPlayerHealth(initialPlayerHealth);
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You Won");
    writeToLog(
      EVENT_LOG_GAME_OVER,
      "Player Won",
      currentPlayerHealth,
      currentMonsterHealth
    );
    reset();
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You Loose");
    writeToLog(
      EVENT_LOG_GAME_OVER,
      "Player Loose",
      currentPlayerHealth,
      currentMonsterHealth
    );
    reset();
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("It is ia draw!");
    writeToLog(
      EVENT_LOG_GAME_OVER,
      "It is a draw",
      currentPlayerHealth,
      currentMonsterHealth
    );
    reset();
  }
}

//This is the function to determine the player attack to the monster
function attackMonster(mode) {
  let maxDamage;
  let event_mode;
  if (mode === MODE_ATTACK) {
    maxDamage = ATTACK_VALUE;
    event_mode = EVENT_LOG_PLAYER_ATTACK;
  } else if (mode === MODE_STRONG_ATTACK) {
    maxDamage = STRONG_ATTACK_VALUE;
    event_mode = EVENT_LOG_PLAYER_SUPER_ATTACK;
  }
  const monsterDamage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= monsterDamage;
  writeToLog(
    event_mode,
    monsterDamage,
    currentPlayerHealth,
    currentMonsterHealth
  );
  endGame();
}

//This function handles the player attack.
function attackHandler() {
  attackMonster(MODE_ATTACK);
}

//This function handles the player super attack.
function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK);
}

//This function is for handling player heals.
function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxHealth - HEAL_VALUE) {
    healValue = chosenMaxHealth - currentPlayerHealth;
    alert("You Can't heal right now.");
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);

  currentPlayerHealth += healValue;
  writeToLog(
    EVENT_LOG_PLAYER_HEAL,
    healValue,
    currentPlayerHealth,
    currentMonsterHealth
  );
  endGame();
}

//This is function which resets the game when game got finished.
function reset() {
  currentPlayerHealth = chosenMaxHealth;
  currentMonsterHealth = chosenMaxHealth;
  resetGame(chosenMaxHealth);
}
//This function is there to print all the logs to the console
function printLogHandler() {
  //We will use for-of loop to access elements in array and for-in loop to print keys and its values for the object inside the array.
  i = 0;
  for (const logs of battle_log) {
    console.log(`#${i}`);
    i++;
    for (const object_keys in logs) {
      console.log(`${object_keys} => ${logs[object_keys]}`);
    }
  }
}

//Here is all the click has been handled.
logBtn.addEventListener("click", printLogHandler);
attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);

const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 12;
let chosenMaxHealth = 100;
let currentMonsterHealth = chosenMaxHealth;
let currentPlayerHealth = chosenMaxHealth;
adjustHealthBars(chosenMaxHealth);

function attackHandler() {
  const monsterDamage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= monsterDamage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You Won");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You Loose");
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("It is ia draw!");
  }
}
attackBtn.addEventListener("click", attackHandler);

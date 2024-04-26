let die = Math.floor(Math.random() * 6) + 1;

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('rollButton').addEventListener('click', roll); 
});

function roll() {
  die = Math.floor(Math.random() * 6) + 1;
  document.getElementById('diceRoll').innerHTML = "You rolled a " + die;
}



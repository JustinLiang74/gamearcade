let total = 0;
let die = 0;

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('rollButton').addEventListener('click', roll); 
  document.getElementById('resetButton').addEventListener('click', () => {
    total = 0;
    document.getElementById('rollButton').disabled = false;
    document.getElementById('diceTotal').innerHTML = "";
    document.getElementById('diceResult').innerHTML = "";
    document.getElementById('diceRoll').innerHTML = "";
  });
});

function roll() {
  die = Math.floor(Math.random() * 6) + 1;
  document.getElementById('diceRoll').innerHTML = "You rolled a " + die;
  total += die;
  document.getElementById('diceTotal').innerHTML = "Total: " + total;
  check();
}

function check() {
  if (total > 17 && total < 20) {
    document.getElementById('diceResult').innerHTML = "You Win!";
    document.getElementById('rollButton').disabled = true;
  } else if (total >= 20) {
    document.getElementById('diceResult').innerHTML = "You Lose!";
    document.getElementById('rollButton').disabled = true;
  } else if (total < 17) {
    document.getElementById('diceResult').innerHTML = "Roll again!";
  }
}



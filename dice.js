let total = 0;

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('rollButton').addEventListener('click', roll); 
  document.getElementById('resetButton').addEventListener('click', () => {
    total = 0;
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

function check () {
  if (total >= 22) {
    document.getElementById('diceResult').innerHTML = "You Lose!";
  } 
  else if (total < 17)
  {
    document.getElementById('diceResult').innerHTML = "Roll again!";
  }
}



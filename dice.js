let total = 0;
let die = 0;
let playerDie = 0;
let botDie = 0;
let isAnimating = false;

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('rollButton').addEventListener('click', checkRoll); 
  document.getElementById('resetButton').addEventListener('click', () => {
    total = 0;
    document.getElementById('rollButton').disabled = false;
    document.getElementById('diceTotal').innerHTML = "";
    document.getElementById('diceResult').innerHTML = "";
    document.getElementById('diceRoll').innerHTML = "";
    document.getElementById('botRoll').innerHTML = "";
  });
});

function changeText(text){
  document.getElementById("instructions").innerHTML = text;
}
  

function getGamemode(){
  let radios = document.getElementsByName('gamemode');
  for (let i = 0; i < radios.length; i++){
    if (radios[i].checked){
      return radios[i].value;
    }
  }
}

function checkRoll(){
  let gamemode = getGamemode();
  if (gamemode === "solo"){
    roll();
  }
  if (gamemode === "bot"){
    botRoll();
  }
}


function roll() {
  if (isAnimating) {
    return;
  }
  
  isAnimating = true;
  document.getElementById('rollButton').disabled = true;
  
  document.getElementById('diceResult').innerHTML = "Rolling...";
  
  setTimeout(() => {
    die = Math.floor(Math.random() * 6) + 1;
    document.getElementById('diceRoll').innerHTML = "You rolled a " + die;
    total += die;
    document.getElementById('diceTotal').innerHTML = "Total: " + total;
    
    
    isAnimating = false;
    document.getElementById('rollButton').disabled = false;
    check();
  }, 1000);
}



function botRoll(){
  if (isAnimating) {
    return;
  }

  isAnimating = true;
  document.getElementById('rollButton').disabled = true;
  document.getElementById('diceResult').innerHTML = "Rolling...";

  setTimeout(() => {
  botDie = Math.floor(Math.random() * 6) + 1;
  playerDie = Math.floor(Math.random() * 6) + 1;
  document.getElementById('diceRoll').innerHTML = "You rolled a " + playerDie;
  document.getElementById('diceTotal').innerHTML = "Bot rolled a " + botDie;

  isAnimating = false;
  document.getElementById('rollButton').disabled = false;
  checkWinner();
  }, 1000);
}

function check() {
  if (total > 17 && total < 20) {
    document.getElementById('diceResult').innerHTML = "You Win!";
    document.getElementById('rollButton').disabled = true;
  } else if (total >= 20) {
    document.getElementById('diceResult').innerHTML = "You Lose!";
    document.getElementById('rollButton').disabled = true;
  } else if (total <= 17) {
    document.getElementById('diceResult').innerHTML = "Roll again!";
  }
}


function checkWinner(){
  if (playerDie > botDie){
    document.getElementById('diceResult').innerHTML = "You Win!";
  }
  else if (playerDie < botDie){
    document.getElementById('diceResult').innerHTML = "You Lose!";
  }
  else {
    document.getElementById('diceResult').innerHTML = "It's a tie!";
  }
}


'use strict';

// Selecting elements from the DOM
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');


// Setting the initial score to 0
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0; // Current score of the player
let activePlayer = 0; // 0 = Player 1, 1 = Player 2

// Rolling the dice
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  let dice = Math.floor((Math.random() * 6) + 1);

  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;


  // 3. Check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    // Add dice to current score
    // score0El.textContent = dice;
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    // current0El.textContent = currentScore;
  }
  else {
    // Switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0; // it helps in switching the player, changing the value of active player
    // score1El.textContent = dice;
    currentScore += dice;
    current0El.textContent = currentScore;
  }

  console.log(dice);

});

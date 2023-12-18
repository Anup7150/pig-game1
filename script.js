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
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// scoping the variables MEANS that we are declaring the variables outside the function so that we can use them in the functio
let scores, currentScore, activePlayer, playing;
// Starting conditions

const init = function () {
  // Resetting the score to 0
  score0El.textContent = 0;
  score1El.textContent = 0;
  // Resetting the current score of the player
  current0El.textContent = 0;
  current1El.textContent = 0;
  scores = [0, 0]; // Score of the player 1 and player 2
  currentScore = 0; // Current score of the player
  activePlayer = 0; // 0 = Player 1, 1 = Player 2
  playing = true; // it means the game is playing
  // removing the winner class
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  // Resetting the active player
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  // Hiding the dice
  diceEl.classList.add('hidden');

}
init();
const switchPlayer = function () {

  document.getElementById(`current--${activePlayer}`).textContent = 0;
  // Switch to next player
  activePlayer = activePlayer === 0 ? 1 : 0; // it helps in switching the player, changing the value of active player
  currentScore = 0;
  // score1El.textContent = dice;
  // current0El.textContent = currentScore;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}


// Rolling the dice
btnRoll.addEventListener('click', function () {
  if (playing) {

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
      switchPlayer();
    }

    console.log(dice);
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    // checking if the player score is greater than 100
    if (scores[activePlayer] >= 20) {
      // Finish the game
      playing = false; // it means that the game is over now
      diceEl.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      currentScore = 0;

    }
    else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init); { // we are not calling the function here, we are just passing the function as an argument
};

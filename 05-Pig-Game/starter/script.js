'use strict';

// refactore functions
const setCurrentScore = function (activePlayer, currentScore) {
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
};

// Application State variables
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currenScore0El = document.getElementById('current--0');
const currenScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Initial values for Score Elements
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display Dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // 3. Checked for rolled 1: if true, switch to next player
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    // Display the current score for active player
    // currenScore0El.textContent = currentScore;
    setCurrentScore(activePlayer, currentScore);
  } else {
    // Switch to next player
    setCurrentScore(activePlayer, 0);
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

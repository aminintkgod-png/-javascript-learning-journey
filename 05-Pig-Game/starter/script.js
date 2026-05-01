'use strict';

// Application State variables
let scores, currentScore, activePlayer, isGameOver;

// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const players = [player0El, player1El];

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const scoreEls = [score0El, score1El];

const currenScore0El = document.getElementById('current--0');
const currenScore1El = document.getElementById('current--1');
const currentScoreEls = [currenScore0El, currenScore1El];

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// -----------------------------------------------------------------------

// refactore functions

// Initial the game
const resetTheGame = function () {
  // Initial State variables
  isGameOver = false;
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];

  // Initial the DOM Elements
  diceEl.classList.add('hidden');

  players[0].classList.add('player--active');
  players[1].classList.remove('player--active');

  players[0].classList.remove('player--winner');
  players[1].classList.remove('player--winner');

  initialize(scoreEls);
  //   score0El.textContent = 0;
  //   score1El.textContent = 0;

  initialize(currentScoreEls);
  //   currenScore0El.textContent = 0;
  //   currenScore1El.textContent = 0;
};

// Initializer
const initialize = function (scores) {
  for (let i = 0; i < scores.length; i++) {
    scores[i].textContent = 0;
  }
};

const setCurrentScore = function (activePlayer, currentScore) {
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
};

const switchPlayer = function () {
  setCurrentScore(activePlayer, 0);

  activePlayer = activePlayer === 0 ? 1 : 0;

  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const finishTheGame = function () {
  isGameOver = true;
  players[activePlayer].classList.add('player--winner');
  players[activePlayer].classList.remove('player--active');
};

// --------------------------------------------------------------------------

resetTheGame();

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (!isGameOver) {
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
      switchPlayer();
    }
  }
});

// Hold Button Functionality
btnHold.addEventListener('click', function () {
  if (!isGameOver) {
    //1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      // 2-1.  Finish the game
      finishTheGame();
    } else {
      // 3. Switch to the next player
      switchPlayer();
    }
  }
});

// Reset the Game
btnNew.addEventListener('click', resetTheGame);

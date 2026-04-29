'use strict';

// Functions
const generateRandomNumber = () => Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (text) {
  message.textContent = text;
};

const resetGame = function () {
  // Initialize score and number values
  score = 20;
  secretNumber = generateRandomNumber();

  // Restore score, secretNumber and message Elements
  guessElement.value = '';
  scoreElement.textContent = score;
  number.textContent = '?';
  displayMessage('Guess a number...');

  // Restore The styles
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
};

// Variables

// Application State variables
let score = 20;
let highScore = 0;

// DOM ELEMENTS
const body = document.querySelector('body');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const scoreElement = document.querySelector('.score');
const againBtn = document.querySelector('.again');
const guessElement = document.querySelector('.guess');
const highscoreElement = document.querySelector('.highscore');
let secretNumber = generateRandomNumber();

// Check Button Functionality
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   NO INPUT SENARIO
  if (!guess) {
    displayMessage('No input');
  } // When player wins
  else if (guess === secretNumber) {
    displayMessage('Correct');
    number.textContent = guess;

    if (score >= highScore) {
      highScore = score;
      highscoreElement.textContent = highScore;
    }
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
      score--;
      scoreElement.textContent = score;
      // reduceScore(score);
    } else {
      displayMessage('GAME OVER.... TRY AGAIN ;)');
      scoreElement.textContent = 0;
    }
  }
});

// Again Button Functionality
againBtn.addEventListener('click', function () {
  resetGame();
});

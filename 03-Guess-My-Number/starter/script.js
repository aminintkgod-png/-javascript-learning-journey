'use strict';

// Variables
let score = 20;

let highScore = 0;

const body = document.querySelector('body');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const scoreElement = document.querySelector('.score');
const againBtn = document.querySelector('.again');
const guessElement = document.querySelector('.guess');
const highscoreElement = document.querySelector('.highscore');

// Functions
const generateRandomNumber = () => Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (text) {
  message.textContent = text;
};

let secretNumber = generateRandomNumber();
// number.textContent = secretNumber;

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
    // highScore.current = score;
    // if (highScore.current >= highScore.prior) {
    //   console.log('A');
    //   console.log(highScore);

    //   highscoreElement.textContent = highScore.current;
    // } else {
    //   console.log('B');
    //   console.log(highScore);
    //   highscoreElement.textContent = highScore.prior;
    // }
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
  /*
  // when Guess is too Low
  else if (guess < secretNumber) {
    if (score > 1) {
      displayMessage() 'Too Low';
      score--;
      scoreElement.textContent = score;
      // reduceScore(score);
    } else {
      displayMessage() 'GAME OVER.... TRY AGAIN ;)';
      scoreElement.textContent = 0;
    }
  } // when Guess is too High
  else if (guess > secretNumber) {
    if (score > 1) {
      displayMessage() 'Too High';
      score--;
      scoreElement.textContent = score;
      // reduceScore(score);
    } else {
      displayMessage() 'GAME OVER.... TRY AGAIN ;)';
      scoreElement.textContent = 0;
    }
  }
*/
});

// Again Button Functionality
againBtn.addEventListener('click', function () {
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
});

// MY IDEAS
/*
let score = Number(scoreElement.textContent);
let isGameOver = false;

const gameover = function () {
  message.textContent = 'GAME OVER.... TRY AGAIN ;)';
};


const reduceScore = function (number) {
  if (score !== 0) {
    console.log(`Previos score: ${number} ${typeof number}`);
    number--;
    console.log(`reduced score: ${number} ${typeof number}`);
    scoreElement.textContent = number;
    score = number;
  } else {
    isGameOver = true;
    gameover();
  }
};
*/

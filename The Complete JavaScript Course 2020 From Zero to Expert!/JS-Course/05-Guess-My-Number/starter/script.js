'use strict';

// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.number').textContent);
// console.log(document.querySelector('.score').textContent);
// console.log(document.querySelector('.guess').value);

// document.querySelector('.message').textContent = 'Correct number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 110;

// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let aboveZero = score >= 0;
let highScore;

const diplayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const quickQuery = function (location, message) {
  document.querySelector(location).textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //when there is no input
  if (!guess) {
    // null is falsy
    diplayMessage('No Number!');
  } //when the player wins
  else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    checkHighScore();
  } else if (guess !== secretNumber) {
    document.querySelector('.message').textContent =
      guess > secretNumber ? 'To High!' : 'To Low!';
    decreaseScore();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
});

//decrement the score and check for victory
function decreaseScore() {
  score--;
  document.querySelector('.score').textContent = score;
  if (score === 0) {
    displayMessage('You have lost the game!');
    document.querySelector('.score').textContent = 0;
  }
}

//check and adjust the high score
function checkHighScore() {
  highScore = document.querySelector('.highscore').textContent;
  if (score > highScore) {
    document.querySelector('.highscore').textContent = score;
  }
}

'use strict';
//selecting elements
const playerZeroPlayerElement = document.querySelector('.player--0');
const playerOnePlayerElement = document.querySelector('.player--1');
const playerZeroScoreElement = document.querySelector('#score--0');
const playerOneScoreElement = document.querySelector('#score--1');
const playerZeroCurrentElement = document.querySelector('#current--0');
const playerOneCurrentElement = document.querySelector('#current--1');
const diceImage = document.querySelector('.dice');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
//reset game to starting conditions
function resetGame() {
  playerZeroScoreElement.textContent = 0;
  playerOneScoreElement.textContent = 0;
  diceImage.classList.add('hidden');
  playing = true;
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  playerZeroCurrentElement.textContent = 0;
  playerOneCurrentElement.textContent = 0;
  activePlayer = 0;
}
function rollDice() {
  return Math.trunc(Math.random() * 6) + 1;
}
function changePlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  playerZeroPlayerElement.classList.toggle('player--active');
  playerOnePlayerElement.classList.toggle('player--active');
}

function holdScore() {
  if (playing) {
    //add current score to active players score
    scores[activePlayer] += currentScore;
    //check if players score is >= 100
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      //finish game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      diceImage.classList.add('hidden');
    } else {
      //switch to next player
      changePlayer();
    }
  }
}
resetGame();

buttonRoll.addEventListener('click', function () {
  if (playing) {
    console.log(rollDice());
    //generate random dice roll
    const dice = rollDice();
    //display dice
    diceImage.classList.remove('hidden');
    diceImage.src = `dice-${dice}.png`;
    //check if rolled a 1. if true switch to next player
    if (dice !== 1) {
      //current score += dice
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;

      // playerOneCurrentElement.textContent = currentScore;
    } else {
      //switch player
      changePlayer();
    }
  }
});
buttonHold.addEventListener('click', holdScore);

buttonNew.addEventListener('click', resetGame);

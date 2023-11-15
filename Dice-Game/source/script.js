'use strict';
// Select players, total scores and dice picture
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
let score, currentScore, activePlayer, playing;

// Initialization
const init = () => {
  // Set scores to 0
  score0.textContent = 0;
  score1.textContent = 0;
  dice.classList.add('hidden');
  // Total score of two players
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  // Game status
  playing = true;
  document.querySelector(`.player`).classList.remove('player--winner');
  player0.classList.add('player--active');
};
init();

// Select buttons and current scores
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');

// When click "New game" button, initialize the game
btnNew.addEventListener('click', init);

// Switch players
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

// Rolling the dice!
btnRoll.addEventListener('click', function () {
  // If playing is true, the game will go on
  if (playing) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${diceNumber}.png`;
    // Check if the dice number equal to 1. If so, switch player, or add the number to current score
    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0.textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 将current score 加入 player's score
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    //检查player'score 是否>=100
    if (score[activePlayer] >= 20) {
      //赢了，把playing设置为false,不再执行上面的Roll/hold buttom click函数
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      dice.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

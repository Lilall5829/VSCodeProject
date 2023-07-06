'use strict';
//选中分数元素并清零,隐藏dice
//注意选择的是ID还是class!如果选的是ID注意是#不是.！！
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
//选择标签ID的另一种方式 document.getElementById('注意这里没有#！！！')
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
let score, currentScore, activePlayer, playing;
const init = () => {
  score0.textContent = 0;
  score1.textContent = 0;
  dice.classList.add('hidden');
  //最终分数,用变量存储
  score = [0, 0];
  //为current score创建变量
  currentScore = 0;
  //当前在玩的是哪个玩家
  activePlayer = 0;
  //游戏状态：设置if语句，如果是真，游戏可以继续，ROLL/HOLD函数都能执行，反之这两个函数不能执行。也可以直接设置按钮的disable属性？
  playing = true;
  document.querySelector(`.player`).classList.remove('player--winner');
  player0.classList.add('player--active');
};
init();
//转换玩家
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  // 换人，如果当前是0就换1，是1就换0
  activePlayer = activePlayer === 0 ? 1 : 0;
  //toggle(类名),如果标签有这个类名，则删除，如果没有，则添加，很方便
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
//选中三个按钮和两个当前玩家的分数
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
//摇dice函数
btnRoll.addEventListener('click', function () {
  //如果playing为真，游戏能继续
  if (playing) {
    //产生一个随机数
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    //显示dice，根据点数更换HTML里的图片,直接.src即可
    dice.classList.remove('hidden');
    dice.src = `dice-${diceNumber}.png`;
    //检查点数是否为1，如果不是，把点数加入current score，如果是，换人
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
//这里的init后面不能加括号！！！
btnNew.addEventListener('click', init);

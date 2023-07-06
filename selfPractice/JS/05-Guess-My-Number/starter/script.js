'use strict';
//选中一个选择器document.querySelector('由于这里必须是字符串，所以要加引号')
//console.log(document.querySelector('.message').textContent);
//DOM: Document Object Model,不是js的一部分，而属于web API（也是js写的库）的一部分！
//改变元素文字.textContent,改变元素值.value
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 21;
// document.querySelector('.guess').value = 15;

//Handling Click Events
//监听事件addEventListener,参数是'click'和匿名函数，只要点击就会触发匿名函数执行

let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let score = 20;
let highScore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

//document.querySelector('.number').textContent = number;
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
  displayMessage('Start guessing');
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
document.querySelector('.check').addEventListener('click', function () {
  //将用户输入的字符串转为数字
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    displayMessage('No number');
    //when player wins, the background is green.用style选中CSS样式
  } else if (guess === number) {
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

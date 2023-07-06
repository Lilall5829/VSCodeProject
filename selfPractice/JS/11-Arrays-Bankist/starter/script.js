'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// P136 BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
//136
const displayMovements = function (movements) {
  //将该标签containerMovements内的标签清空,也可以用log显示该标签看看里面都是什么登西
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    //修改html标签
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
  `;
    //增加新标签放入html中,调用isertAdjacentHTML，参数的意义参见MDN文档，此处afterbegin是指开始标签<div class="movements">之后,html代表想要增加的新标签
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
//P141 MAP应用
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);
console.log(accounts);
/////////////////////////////////////////////////
//P132 数组方法
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(-3, -1)); //slice(）方法，提取倒数第三到倒数第一的元素，不改变原数组，括号里没参数表示选中整个数组
console.log(arr.splice(1, 2)); //splice方法，把包括index为1在内的两个元素都提取掉，也可以为负值，改变原数组
console.log(arr);
console.log([...arr]);

//REVERSE 倒置数组，会改变原数组
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT a.concat(b),把b数组接在a后面 = [...a,...b]
const letters = arr.concat(arr2);
//JOIN 用某个字符连接数组中的所有元素
console.log(letters.join('-'));
//P133 at method也适用于string，所以运行结果也是字符串而不是数组
const arr3 = [23, 11, 54];
console.log(arr3.at(0));
//取数组最后一个元素
console.log(arr3.length - 1);
console.log(arr3.slice(-1)[0]);
//使用at方法取数组最后一个元素
console.log(arr3.at(-1));
//P134forEach循环
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//for (const movement of movements) {
//.entries()不要忘记括号！
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement${i + 1}: You withdrew ${Math.abs(movement)}`); //Math.abs() 取绝对值
  }
}
//a.forEach(function(){})，该方法不能break，一定会完成循环
//movements.forEach(function (movement) {
//forEach(function(当前元素，索引，数组))
movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
});
//P135 forEach在MAP和set中的应用
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
currencies.forEach(function (value, key, map) {
  console.log(`${key}:${value}`);
});
const currenciesUnique = new Set(['USD', 'GCP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, set) {
  //实际上第二个参数key没有意义，和value一样，可以用_代替，写成(value, _, set)
  console.log(`${key}:${value} ${set}`);
});
//Challenge 1
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2, 2);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  dogs.forEach(function (age, i, dogs) {
    if (age < 3) {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    } else {
      console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
//P140 MAP方法 好处：自动生成新数组，不改变原数组，而forEach需要改变原数组
const eurToUsd = 1.1;
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);

const movementDescriptions = movements.map((mov, i, arr) => {
  return `Movement${i + 1}: You ${
    mov > 0 ? 'deposited' : 'withdrew'
  } ${Math.abs(mov)}`;
});
console.log(movementDescriptions);

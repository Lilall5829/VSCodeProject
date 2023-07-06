//P119
'use strict';
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5的赋默认值的做法如下，而ES6会像上面一样直接给形参赋默认值
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 900);
createBooking('LH123', 2);
createBooking('LH123', 5);
//如果想跳过某个参数，可以传入undefined
createBooking('LH123', undefined, 5);

//P120
//JS只有值传递，没有引用传递，传引用类型也是传递值，只不过这个值是真正的值的地址
const flight = 'LH234';
const jonas = {
  name: 'jonas schmedtmann',
  passport: 2323423535,
};

const checkIn = function (flightNum, passenger) {
  //给形参赋值不会影响函数外的primitive value,这里的flightNum还是LH234，但是会影响reference value,所以jonas变了（参见视频4：50）
  //非必要还是不要改动引用数据
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;
  // if (passenger.passport === 24827384) {
  //   alert('Check in');
  // } else {
  //   alert('Wrong passport');
  // }
};
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};
newPassport(jonas);
checkIn(flight, jonas);

//P122 Higher-order function 和 callback function
const oneWord = function (str) {
  return str.replace(/ /g, '').tolowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string:${str}`);
  console.log(`Transformed string: ${fn}`);
  console.log(`Transformed by: ${fn.name}`);
};
//下面的upperFirstWord和oneWord是callbackfunction
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);
const high5 = function () {
  // console.log('applaud');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);
//p123
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
const greet = greeting => name => {
  console.log(`${greeting} ${name}`);
};

const greeterHey = greet('hey');
greeterHey('Jonas');
greeterHey('Steven');
greet('Hello')('Jonas');
//P124 call and apply方法，解决this问题
const lufthansa = {
  airline: 'Luftansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Jonas asdiaisdhia');
lufthansa.book(345, 'Jass asdhau');
console.log(lufthansa);
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;
//此时如果直接调用book(23, 'Sarah Williams'); 会出错，因为this指向undefined
//调用call方法解决，改变this指向
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 987, 'Mary Cooper');
console.log(swiss);
//apply method 传array进去，在现代JS中已经不再使用，因为可以用spread ...代替
const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
book.call(swiss, ...flightData);

//P125 bind method，实际上相当于重新创建了一个function
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven WILLIAMS');
const bookEW23 = book.bind(eurowings, 23);
//name可以单独拎出来
bookEW23('Jonas Schedtmann');
bookEW23('Martin Copper');
//With Event Listeners
lufthansa.planes = 300;
//lufthansa.buyPlane是对象内的方法
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
//注意：此处的this指向.buy，因此需要bind将this重定向回lufthans
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
//partial application
const addTax = (rate, value) => value * value * rate;
console.log(addTax(0.1, 200));
//null代表没有绑定的object
const addVAT = addTax.bind(null, 0.23);
//上面这句相当于 addVAT = value => value * value * 0.23
console.log(addVAT(100));
//P126 Challenge 1
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnwer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(',')}`);
    }
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnwer.bind(poll));
//P127 immediately invoked function expression
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();
//IIFE发明是为了隐藏变量，不让其他代码中的变量覆盖它。不save，直接execute，注意多了层括号
(function () {
  console.log('This will never run again');
  //里面的变量是encapsulated
  const isPrivate = 23;
})();
(() => console.log('This will never run again'))();
//用括号创建一个作用域来隐藏变量，防止外部代码改变变量
{
  const isP = 23;
}
//无法显示isP
//console.log(isP);
//P128 Closures 闭包,不是想array或者object那样创建的而是自然产生的，并且优先级比作用域高prioirity over scope chain
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();
//booker能访问到passengerCount，因为任何函数有权访问创造它的execution context(EC)的变量环境(VE variable environment)，即使这个EC已经pop off。booker覆盖了它的parent VE，因此booker保存这个VE并且可以永久使用
//console.dir 可以查看闭包scope
console.dir(booker);
//P129闭包2
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f(); //46
h();
f(); //1554
console.dir(f);
//Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are three groups, each with ${perGroup} passengers`);
  }, wait * 1000); //设置时间函数，第一个参数是需要执行的函数，第二个是时间以ms为单位，1000ms=1s，将在该时间后执行函数
  console.log(`Will start boarding in ${wait} seconds`);
};
// const perGroup = 1000; 会被闭包cover掉，因为闭包的priority高于scope
boardPassengers(180, 3); //boardPassengers会先于callback函数setTimeout执行

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'tri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${1 + 5}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //P104 enhanced object literal对象增强写法
  // openingHours: openingHours,对象名和变量名一样的情况下可以简写如下
  openingHours,

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  //上面这个function也可以简写如下，把:和function关键字去掉
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //如何将1个object传入function，而不是分几个argument传入
  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },
  //这里object属性的顺序可以变，并且可以赋默认值，例如time = '20:00'，如果后面调用时没有传入time的值，则默认为20:00
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(otherIngredient);
    console.log(mainIngredient);
  },
};

//P108 Sets, 和数组不同，没有index，而且也没法把单个的元素取出来
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);
//字符串也可以是Set
console.log(new Set('Jonas'));
//.size Set的大小，注意这个后面没括号
console.log(ordersSet.size);
//.has 检查set中是否含有某元素
console.log(ordersSet.has('Pizza'));
//.add元素
ordersSet.add('Garlic');
//.delete
ordersSet.delete('Garlic');
//.clear 删除全部元素
ordersSet.clear();

for (const order of ordersSet) console.log(order);
//Example
const staff = ['waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique);
console.log(
  new Set(['waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('jonasschmedtmann').size);

//P109 Maps 映射，和Set的区别是，Maps的Type可以是任何值，Set只能是string
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :C');
//这里get()内的内容要和set完全一致，比如set里没有引号的就不要带引号
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));
//.delete
rest.delete(2);
//.size
rest.size;
rest.set([1, 2], 'Test');
//此处直接get[1，2]是无法取到Test的，需要用变量存储[1,2],因为调用非基本数据类型都要提前设置变量指针
const arr0 = [1, 2];
rest.set(arr0, 'Test');
console.log(rest.get(arr0));
//取http文件里的标签
rest.set(document.querySelector('h1'), 'Heading');
//P110 Map的简写
const question = new Map([
  ['question', 'What is the best programing language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);
console.log(question);
//convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
// loop map，map本身是iterable的
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// console.log(answer);
// console.log(question.get(answer === question.get('correct')));
// //convert map to array，使用...
// console.log([...question]);
// console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);
//P111 如何选择数据结构？
//数据来源 1、程序本身 2、来自UI 3、来自外部 web api(from JSON 的Object和Array)
//Need simple list?选Arrays or Sets
//Need key/value pairs?选Objects or Mpas
//P113 work with strings p1
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log('B737'[0]);
//字符串长度计算会包括空格
console.log(airline.length);
console.log('B737'.length);
//检索某元素的索引
console.log(airline.indexOf('r'));
//检索某元素（可以不止一个字符）在字符串中最后一次出现的索引
console.log(airline.lastIndexOf('rt'));
//从第4个字符开始提取字符串的元素，最好定义一个新string存储，不改变实际字符串
console.log(airline.slice(4));
//提取第4-6个元素
console.log(airline.slice(4, 7));
//提取第一个单词
console.log(airline.slice(0, airline.indexOf(' ')));
//提取最后一个单词，如果不+1，会包括空格
console.log(airline.lastIndexOf(' ') + 1);
//负数代表从倒数第几个开始提取
console.log(airline.slice(-2));
console.log(airline.slice(1, -2));
//检查一个座位是否为中间（B/E）
const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s == 'B' || s == 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};
checkMiddleSeat('11B');
checkMiddleSeat('13C');
//P114
//转换大小写
console.log(airline.toLowerCase());
console.log('ASDSAD'.toUpperCase());
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
//将首字母设为大写
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);
//Check emails
const email = 'hello@jonas.io';
const loginEmail = 'Hello@Jonas.Io \n';
const lowerEmail = loginEmail.toLowerCase();
//去除空格
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);
//replacing part of string，将f替换成🔪
const priceGB = '288,97f';
const priceUS = priceGB.replace('f', '🔪').replace(',', '.');
console.log(priceUS);
const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
//改变原始字符串
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement);
//正则表达式 regular expression
console.log(announcement.replace(/door/g, 'gate'));
//Booleans布尔量
const plane1 = 'Air A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.includes('Boeing'));
console.log(plane1.startsWith('Air'));

if (plane1.startsWith('Airbue') && plane1.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('I have a laptop, some foof and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
//P115
//split方法，通过某些字符把字符串分解为数组
console.log('a+very+nice+string'.split('+'));
console.log('Jonas asjaij'.split(' '));
const [firstName, lastName] = 'Jonas asjaij'.split(' ');
//join方法,把数组内的元素通过---连接，在名前面加称呼并将姓大写
const newName = ['Mr.', firstName, lastName.toUpperCase()].join('---');
console.log(newName);
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));另一种实现方法如下：
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper);
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');
//padding string 将元素加入字符串直到特定Length
const message = 'Go to gate 23!';
//padStart:给message从前面增加+字符直到字符串长度为25。padEnd是从最后一位开始加
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Jonas'.padStart(25, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(362543726));
console.log('728347287383243');
//Repeat，重复该字符串
const message2 = 'Bad weather...All Departures Delayed...';
//重复5遍
console.log(message2.repeat(5));
//更多字符串方法可以在MDN查 string.prototype
//P106 looping objects
//对象本身不是iterable，因此通过将其解构为键和值来实现loop
// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }
//property Names loop 键名
const properties = Object.keys(openingHours);
let openStr = `We are open on${properties.length} days`;
for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);
//property VALUES loop属性值
const values = Object.values(openingHours);
console.log(values);
//loop整个属性，包括键名和值
const entries = Object.entries(openingHours);
console.log(entries);
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at${open} and close at ${close}`);
}
//P105 optional chaining,如果一个属性不存则则返回unfined
//检测.mon是否存在
console.log(restaurant.openingHours.mon?.open);
//检测.openingHours是否存在，不存在则为closed
console.log(restaurant.openingHours?.mon?.open ?? 'closed');

const days = ['mon', 'tue', 'wed', 'thu', 'tri', 'sat', 'sun'];
for (const day of days) {
  //console.log(day);
  const open = restaurant.openingHours[day]?.open || 'closed';
  console.log(`On ${day}, we open at${open}`);
}
//检测method是否存在，注意这里的methed？和（）之间有.！
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
//检测arrays是否存在
const users = [{ name: 'Jonas', email: 'sdhsudhsuhd' }];
console.log(users[0]?.name ?? 'User array empty');
const rest1 = {
  name: 'Capri',
  numGuests: 20,
};
const rest2 = {
  name: 'La',
  owner: 'Rossi',
};

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
console.log(rest1);
console.log(rest2);

//destructing
//SPREAD, on the right side of =
const rArr = [1, 2, ...[3, 4]];
//REST, on the left side of =
const [q, w, ...others] = [1, 2, 3, 4, 5];
console.log(q, w, others);
const [pizza, , asdaw] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, asdaw);
//rest for object
// const { sat, ...weekdays } = restaurant.openingHours;

//functions
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
const e = [23, 25, 6];
add(...e);

restaurant.orderDelivery({
  time: '22:30',
  address: 'via del sple, 21',
  mainIndex: 2,
  starterIndex: 2,
});

//P96
//解构Object，注意用curly brace
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

//如何将解构的Object赋给新变量 属性: 变量名
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
//不存在的属性赋给变量默认为default
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
//注意这里的圆括号！
({ a, b } = obj);
console.log(a, b);

//嵌套nested Objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// //解构数组
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);
// //如果是想取数组中的任意两个值呢？比如第1和第3个：把第二个空出来即可
// const [first, , third] = restaurant.categories;
// console.log(first, third);
// //如果想调换数组中的位置？
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// // 方法一：定义一个变量倒一下
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(2, 0);
// //nested array嵌套数组 destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);
// //Default values，默认为undefined
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

//P97 扩展运算符The spread operator
const arr = [7, 8, 9];
//方法一：...
const newArr = [1, 2, ...arr];
console.log(newArr);
//显示解构的数组，看起来和解构很像，但实际上扩展运算符把数组里所有元素拆了并一起拿出来了，而不是拿单个的，也没有产生新变量
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
//shallow Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
//P103 For-of LOOPING ARRAYS
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);
for (const item of menu) console.log(item);
//输出循环数组的index和元素,调用entries方法
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}:${item[1]}`);
// }

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}:${el}`);
}

//iterable 可迭代的，包括arrays strings maps sets 除object外
const str = 'Jonas';
const letters = [...str, '', 's'];
console.log(...str);
console.log(letters);

// const ingredients = [
//   prompt("let's make pasta! Ingrednet 1?"),
//   prompt("let's make pasta! Ingrednet 2?"),
//   prompt("let's make pasta! Ingrednet 3?"),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);
//但实际上ES2018后，object也可以使用spread operater
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);
const restaurantCopy = { ...restaurant };
//copy
restaurantCopy.name = 'Lila';
console.log(restaurant.name, restaurantCopy.name);

//P98 rest pack elements into an array, 与spread是相反操作
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'meat');

//P99 OR AND
// OR的3个特性：Use any data type, return any data type（可以返回非布尔量）, short-circuiting(短路，返回第一个为真的值，如果没真的，就返回最后一个值)
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
const guests1 = restaurant.numGuest || 10;
//const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
//AND的3个特性：Use any data type, return any data type（可以返回非布尔量）, short-circuiting(短路，返回第一个为假的值，如果没假的，就返回最后一个值)
console.log(0 && 'Jonas');
console.log(9 && 'Jonas');
console.log('Jonas' && 23 && null && 'Hello');
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'spinach');
// }
//用AND语句实现如果点披萨存在，则输出成分
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//P100 nullish coalescing operator, 只有当NULL或undefined的值才短路，不包括0或''，如不短路，返回第一个非NULL的值
restaurant.numGuest = 0;
const guestsCorrect = restaurant.numGuest ?? 10;
console.log(guestsCorrect);

// typeof:显示变量的类型
console.log(typeof javascrptIsFun);
javascrptIsFun = 'Yes';
console.log(typeof javascrptIsFun);
let year;
console.log(year);
console.log(typeof year);
year = 1999;
console.log(typeof year);

//js显示null的类型为objcet，显然是一个错误
console.log(typeof null);

//let 声明变量， const 声明常量，给常量再赋值会报错immutable，不给常量赋值也会报错
const birthYear = 1991;
//birthYear = 1995; 会报错
//const job; 会报错

//operator 算符
//math operators
// ** n表示n次幂
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 1995;
console.log(ageJonas, ageSarah);
console.log(ageJonas ** 3);
// + 可以连接两个字符串，' '可以在中间增加空格
const firstName = 'Jonas';
const lastName = 'Lala';
console.log(firstName + ' ' + lastName)

// Assignment operators 
// += 先加后赋值, -= *= 同理
let x = 10 + 5;
x += 10;// x = x + 10
console.log(x)
//++ 加1 --减1
x++;
console.log(x)

//Comparsion operators 
// > < >= <= true or false
console.log(ageJonas > ageSarah);
console.log(ageJonas > 100);
const isFullAge = ageSarah >= 18;
console.log(isFullAge);

//precedence 可以在MDN里检索各算符优先级
console.log(now - 1991 > now - 2018);

const massMark = 78, massJohn = 92, heightMark = 1.69, heightJohn = 1.95;
let bmiMark = massMark / heightMark ** 2;
let bmiJohn = massJohn / heightJohn ** 2;
console.log(bmiMark, bmiJohn);
let markHigherBMI = (bmiMark > bmiJohn);
console.log(markHigherBMI);
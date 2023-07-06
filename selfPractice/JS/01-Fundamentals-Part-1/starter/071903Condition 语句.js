//条件语句，三元运算符
const age = 23;
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');
//作为运算符，可以成为expression，所以可以放在statement里！
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

const bill = 40;
const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the tatol value was ${bill + tip}`);
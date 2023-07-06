const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '.';
console.log(jonas);

//template literal 模板字符串, `text ${variable}`
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}.`;
console.log(jonasNew);

//多行字符串，换行符\n
console.log('String is a \n sb.')

//直接换行也行！注意这里是``，不要写成单引号了！
console.log(`String 
is
a
sb!`);
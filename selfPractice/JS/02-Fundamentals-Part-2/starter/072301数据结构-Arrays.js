const friends1 = 'Michael';
const friends2 = 'Steven';
const friends3 = 'Peter';
//数组，[]方括号方式,literal syntax
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
// new Array(), new关键字+调用数组函数方式，注意这里是圆括号，bracket syntax
const yeahs = new Array(1991, 1992, 1994, 1998);
//从0开始计数
console.log(friends[0]);
//数组长度
console.log(friends.length);
//显示最后一个元素
console.log(friends[friends.length - 1]);
//替换元素，只有primitive values的const常量不能改变，但数组不是，所以可以改变个别元素，但是不能改变整个数组的值，比如friends = ['Bob', 'Alice'],是非法的！
friends[2] = 'Kay';
console.log(friends);

const jonas = ['Jonas', 'Schmedymann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

const calcAge = function(birthYear){
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
console.log(age1);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];
console.log(ages);
//for循环loop语句, loop keeps runing while condition is TURE
for(let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep}`);
}
//循环语句显示数组元素
const jonasArray = [
    'Jonas',
    'Schmedtman',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];
//循环语句增加数组元素
const types = [];//声明一个空数组
for(let i = 0;i < jonasArray.length; i++){
    console.log(jonasArray[i], typeof jonasArray[i]);
    //filling types array;
    //types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}
console.log(types);
const years = [1991, 2007, 1969, 2020];
const ages = [];
for(let i = 0; i < years.length; i++){
    ages.push(2037 - years[i]);
}
console.log(ages);

//continue跳过当前这一次循环后面其他语句的执行，进行下一次循环 and break 跳出整个循环体
console.log('---only strings---')
for(let i = 0; i < jonasArray.length; i++){
    if(typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
}
console.log('---break with number---')
for(let i = 0; i < jonasArray.length; i++){
    if(typeof jonasArray[i] === 'number') break;
    console.log(jonasArray[i], typeof jonasArray[i]);
}
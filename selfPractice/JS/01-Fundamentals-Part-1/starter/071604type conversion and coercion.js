//type conversion:
//js的数据类型里只有数字，字符串，布尔量可以转换，其他的不行
//Number函数，将字符串'1991'转回数字1991,但是转例如Jonas这样的字母是不行的，会显示NaN
const inputYear = '1991';
console.log(inputYear, Number(inputYear));
//否则结果就是字符串连接
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);
//String函数，将数字转为字符串
console.log(String(23), typeof String(23));

//type coercion
//两个类型不同的值进行运算时，会自动进行匹配转换，下例的数字23，因为和字符串相加，就被自动转换为字符串了
console.log('I am' + 23 + ' years old');
//下例的第一个23就被自动转换为数字，第二个由于前面是加号，所以还是字符串
console.log(53 - '23' + '23');

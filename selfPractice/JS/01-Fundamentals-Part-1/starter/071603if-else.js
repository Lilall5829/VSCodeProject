const age = 15;
const isOldEnough = age >= 18;
//emoj可以用win + . 打出来
if (isOldEnough) {
    console.log('Sarah can start driving license 🥵');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 🙄`);
}
//在if-else语句里定义变量是不行的！
const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

const bmiMark = 28.3;
const bmiJohn = 23.9;
if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI(${bmiMark}) is higher than John's(${bmiJohn})!`);
} else {
    console.log(`John's(${bmiJohn}) is higher than Mark's BMI(${bmiMark})!`);
}
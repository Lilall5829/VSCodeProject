//并非所有函数都需要参数和返回值，在js中，函数本身是一种值
function logger() {
    console.log('My name is Jonas');
}
//call a fuction 调用函数
logger();
logger();

//paramenter 参数，例如下面的apples和oranges

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;//返回的结果可以通过console显示
}
//arguments  引元，例如(5, 0)
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
//function declaration与expression的区别：前者可以先call声明,再define,但后者不行，必须先define再call
const age1 = calcAge1(1991);
console.log(age1);
// 下列以匿名函数的方式构造函数也是可以的！这里的fuction是expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);

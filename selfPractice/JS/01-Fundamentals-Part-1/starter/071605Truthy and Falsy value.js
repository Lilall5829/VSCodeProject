// 布尔量中的5个falsy 值：0, '', undefined, null, NaN。其他的都是truthy值
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
//空对象也是ture
console.log(Boolean({}));
//没有空格
console.log(Boolean(''));
//if里的数字coercion为布尔量
const money = 0;
if (money) {
  console.log("Don't spengd it all;");
} else {
  console.log('You should get a job!');
}
//问题：无法判断变量到底是赋值为0还是压根没无赋值
let height = 0;
//let height;
if (height) {
  console.log('Height is defined');
} else {
  console.log('Undefined!');
}

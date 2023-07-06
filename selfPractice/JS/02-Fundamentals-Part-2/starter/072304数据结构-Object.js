//对象,和数组的区别在于，可以给里面的属性property命名
const jonas = {
    firstName: 'Jonas',//注意这里是冒号和逗号，不是等号和分号！
    lastName:'Schmedtman',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']//最后一个值后面不用写逗号
};//分号在这里
console.log(jonas);
//获取属性的两种方法
//dots notation 点表示法
console.log(jonas.lastName);
//brackets notation 括号表示法 ,如果这个属性是个方法（函数），那么需要写成jonas['属性名'](参数)
console.log(jonas['lastName']);
const nameKey = 'Name';
//括号里可以放任何表达式expressions,但是点表示法不行！因此括号表示法适用于属性名需要计算的情况下
console.log(jonas['first'+nameKey]);
console.log(jonas['last'+nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
console.log(jonas[interestedIn]);
 if(jonas[interestedIn]){
    console.log(jonas[interestedIn]);
 } else{
    console.log('Wrong request');
 }

 //给对象增加一个属性，直接define一个就行
 jonas.location = 'Portugal';
jonas['twitter'] = '@jonass';
console.log(jonas);

console.log(`${jonas.firstName + jonas.lastName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
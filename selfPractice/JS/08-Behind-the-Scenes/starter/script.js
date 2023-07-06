'use strict';
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    const output = `${firstName} are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      //var的作用域是整个函数，不是block块{}以内，var可以声明提升.let和const作用域为块级
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    //add(2, 3);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
//直接调用this的值为window
console.log(this);

const calcAge2 = function (birthYear) {
  console.log(2037 - birthYear);
  //this的值为undefined(strict mode下，否则也是window)
  console.log(this);
};
calcAge2(1991);

const calcAge3 = birthYear => {
  console.log(2037 - birthYear);
  //arrow function中，this的值为window,因为它没有this keyword
  console.log(this);
};
calcAge3(1991);
//object 为 function的owner, this值指向调用fuction的object
/* const jonas1 = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas1.calcAge();
const matilda = {
  year: 2017,
};
matilda.calcAge = jonas1.calcAge;
matilda.calcAge();

const f = jonas1.calcAge;
*/
//调用f会和调用普通函数一样，为undefine,但是因为未定义year所以会报错
//f();

const jonas1 = {
  firstName1: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
  //箭头函数，没有this keyword，this指向window object，如果此时定义一个var firstName1 = 'Matilda',这里的this将指向var firstName1，因为它是全局变量window.firstName1
  //所以不要使用箭头函数做method！
  greet: () => console.log(`Hey, ${this.firstName1}`),
};
jonas1.greet();
console.log(this.firstName);

const jonas4 = {
  firstName1: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    //如何将this传入里面的函数？
    //方法一：再定义一个变量存储this
    /*const self = this;
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
    */
    //方法二、使用箭头函数，因为它没有自己的this keyword,所以会向上inherits parent scope的this
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => console.log(`Hey, ${this.firstName1}`),
};
jonas4.greet();
jonas4.calcAge();

const addExpr = function (a, b) {
  //arguments keywords：可以显示所有传进来的arguments
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
//一般函数可以放更多arguments，存在Arguments数组里，但不能用
addExpr(2, 5, 6, 7);
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
//箭头函数不能放超过声明数量的agruments
//addArrow(2, 5, 6);

//primitive types
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

//reference types
const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);
//改了friend.age，me.age 也变成27了！primitive types 和 reference types在memory中的位置不同，前者在stack，后者（的具体属性）在heap里，因此两个object指向同一个stack，此时改了heap里的值，没改stack的值，因此两个object的属性会一起改变，如何解决？
//使用function Object.assgin
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alica', 'Bob'],
};
//浅copy jessica, ，一个新object存入heap， 这样就可以有两个不同的object了。
const marriedJessica = Object.assign({}, jessica);
marriedJessica.lastName = 'Davis';
console.log('Bedore:', jessica);
console.log('After:', marriedJessica);
//但是这个方法只对一层object有效，所以叫shallow copy，如果内层还有reference types怎么办？
marriedJessica.family.push('Mary');
marriedJessica.family.push('John');
console.log('Bedore:', jessica);
//内层的object还是一样把之前的object改了！
console.log('After:', marriedJessica);
//需要deep clone 去彻底clone一个新object，方法是调用external library

//Object里的函数表达
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtman",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  // calcAge: function(birthYear){
  //     return 2037 - birthYear;
  // }
  //calcAge: function(){
  //   return 2037 - this.birthYear;//this表示调用函数的地址，可以在函数里直接调用同一个对象的其他属性值，后面也不用再传参了！
  //}
  //甚至可以用this产生一个新属性
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};
// console.log(jonas.calcAge(jonas.birthYear));
//console.log(jonas.calcAge());
console.log(jonas.calcAge()); //先调用calcAge一次，然后才能产生age！并且调用方法的时候绝对不能忘了()!
console.log(jonas.age);
console.log(jonas["calcAge"]()); //注意括号表达的写法！
console.log(jonas.getSummary());

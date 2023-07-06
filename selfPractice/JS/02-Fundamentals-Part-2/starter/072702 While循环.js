for(let rep = 1;rep <6; rep++){
    console.log(`lifting weight repetition ${rep}`);
}
//while循环更灵活，特别是对不需要计数器的情况，循环条件可以不是计数
let rep = 1;
while(rep <= 10){
    console.log(`lifting weight repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;//Math.random() 生成一个[0,1)的随机数
// console.log(dice);
while(dice !== 6){
    console.log(`You rollde a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6)
    console.log('Loop is about to end');
}
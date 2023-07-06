const jonas = [
    'Jonas',
    'Schmedtman',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];
for(let i = jonas.length - 1; i >= 0; i--){
    console.log(i, jonas[i]);
}

//循环嵌套
for(let exercise = 1; exercise < 4; exercise++){
    console.log(`----Starting exercise ${exercise}`);
    for(let rep = 1;rep <6; rep++){
        console.log(`lifting weight repetition ${rep}`);
    }
}
'use strict';
const calcAverage = (one, two, three) => {
    const average = (one + two + three) / 3;
    return average;
}
let avgDophins = calcAverage(85, 54, 41);
let avgKoalas = calcAverage(23, 34, 27);
const checkWinner = (avgDophins, avgKoalas) => {
    if (avgDophins >= avgKoalas * 2) {
        console.log(`Dophins win (${avgDophins} vs. ${avgKoalas}) `);
    } else if (avgKoalas >= avgDophins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDophins}) `);
    } else {
        console.log('No team wins!');
    }
}
checkWinner(avgDophins, avgKoalas);
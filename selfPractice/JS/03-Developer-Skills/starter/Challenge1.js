'use strict';
const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];
const printForecast = temp =>{
    let printresult = '';
    for(let i = 0; i < temp.length ; i++){
    // debugger;
        printresult += `... ${temp[i]}C in ${i+1} days`;
    }
    return console.log(printresult + `...`);
}
printForecast(temps1);
printForecast(temps2);

const bills = [22, 295,176, 440, 37, 105, 10, 1100 ,86, 52];
const tips = [];
const totals = [];
const calcTip = bill =>{
    return (bill >= 50 && bill <= 300) ? bill * .15 : bill * .20;
}

for(let i = 0; i < bills.length; i++){
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);

}
console.log(totals);
const calcAverage = arr =>{
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage(totals)); 
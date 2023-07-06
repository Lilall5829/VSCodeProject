//Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1993);
console.log(age3);
//有多个参数就用括号包起来
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
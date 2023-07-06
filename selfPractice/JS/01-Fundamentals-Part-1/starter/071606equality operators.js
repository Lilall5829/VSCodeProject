// ===/!== triple equal 比较左右值是否相等的逻辑算符，是严格的比较算符，结果返回true/false, 由于不进行ceorcion, 所以数值类型不相同会返回false(建议使用，以免出错)
//==/!= double equal 比较左右值是否相等的逻辑算符，是宽松的比较算符，结果返回true/false, 由于进行ceorcion, 所以即使数值类型不相同也会返回true
const age = '18';
if (age === 18) console.log('adult.(strict)');//数值类型不同，返回false
if (age == 18) console.log('adult.(loose)');//数值类型不同也能返回true
if (age !== 18) console.log('Not an adult.(strict)');//数值类型不同，返回true


const favourite = Number(prompt("What's ur favourite number?"));
console.log(typeof favourite);
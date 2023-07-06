const friends = ['Michael', 'Steven', 'Peter'];
//在数组末尾添加一个元素.push,返回值是数组长度
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

//在数组头部添加一个元素.unshift
friends.unshift('John');
console.log(friends);

//删除数组末尾的元素.pop,返回值是被移除的元素
friends.pop();
const poped = friends.pop();
console.log(poped);
console.log(friends);

//删除数组头部的元素.shift,返回值是被移除的元素
friends.shift();
console.log(friends);

//返回元素的索引.indexOf，从0开始计数
console.log(friends.indexOf('Steven'));//第二个元素的索引是1
console.log(friends.indexOf('Bob'));//对于不存在的元素返回-1

//ES6方法method .includes 如果元素在数组里，返回true，不在返回false,并且includes是严格对比，数据类型不同也会返回false，比如'23'和23
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
friends.push(23);
console.log(friends.includes('23'));

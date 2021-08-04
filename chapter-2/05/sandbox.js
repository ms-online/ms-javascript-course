// 字符串strings
console.log('hello world');

let email = 'summer@gmail.com';

console.log(email);
// 字符串连接
let firstName = 'Summer';
let lastName = 'Peng';

let fullName = firstName + ' ' + lastName;

console.log(fullName);

// 获取字符
console.log(fullName[4]);

// 字符串长度
console.log(fullName.length);

// 字符串方法
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

// 字符串常见方法
let password = 'Msonline123';

// let results = password.lastIndexOf('n');

// let results = password.slice(0, 5);

// let results = password.substr(2, 5);

// let results = password.replace('M', 'm');
let results = password.replace('n', 'N');

console.log(results);

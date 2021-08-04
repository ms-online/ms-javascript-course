// 逻辑运算符 &&（与） 和 ||（或）
const password = '1@';

if (password.length >= 12 && password.includes('@')) {
  console.log('密码安全性最高');
} else if (password.length >= 8 || password.includes('@')) {
  console.log('密码安全性较好');
} else {
  console.log('密码安全性较差');
}

// 非运算 ！

let user = false;

if (!user) {
  console.log('用户必须先进行登录');
}

console.log(!true);
console.log(!false);

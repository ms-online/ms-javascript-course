// if 语句
// const age = 30;

// if (age > 20) {
//   console.log('你的年龄超过了20周岁');
// }

// const names = ['Summer', 'Lucy', 'Henry', 'John', 'Lily'];
// if (names.length >= 5) {
//   console.log('数组人数在5人以上');
// }

const password = '123456789098765';

if (password.length >= 12) {
  console.log('密码安全性最高');
} else if (password.length >= 8) {
  console.log('密码安全性较好');
} else {
  console.log('密码安全性较差');
}

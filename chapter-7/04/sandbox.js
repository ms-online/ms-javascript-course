const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log();
  // console.log(username.value);
  console.log(form.username.value);
});

//正则表达式测试
const username = '123summer';
const pattern = /[a-z]{6,}/;

// let result = pattern.test(username);
// console.log(result);

// if (result) {
//   console.log('正则匹配通过');
// } else {
//   console.log('正则匹配不通过');
// }

let result = username.search(pattern);
console.log(result);

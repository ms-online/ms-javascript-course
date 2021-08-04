// for循环
// for (let i = 0; i < 5; i++) {
//   //代码块
//   console.log('循环中', i);
// }
// console.log('循环结束');

const names = ['Summer', 'Lucy', 'Henry', 'John'];

for (let i = 0; i < names.length; i++) {
  // console.log(names[i]);
  let html = `<div>${names[i]}</div>`;
  console.log(html);
}

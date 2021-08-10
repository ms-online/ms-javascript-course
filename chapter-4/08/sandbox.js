// 获取人名插入ul
const ul = document.querySelector('.people');

const people = ['张三', '李四', '王五', '赵六'];

let html = '';

people.forEach(function (person) {
  //创建html模版
  html += `<li style="color:red">${person}</li>`;
});
console.log(html);
ul.innerHTML = html;

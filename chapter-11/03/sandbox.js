// 本地存储中保存数据
localStorage.setItem('name', 'summer');
localStorage.setItem('age', 50);

// 将数据存储到本地中
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age);

// 删除本地存储的数据
// localStorage.removeItem('name');
localStorage.clear();

name = localStorage.getItem('name');
age = localStorage.getItem('age');

console.log(name, age);

// 回调函数 和 foreach

// const myFunc = (callback) => {
//   //执行操作
//   let value = 50;
//   callback(value);
// };

// myFunc((val) => {
//   //执行操作
//   console.log(val);
// });

let person = ['张三', '李四', '王五', '赵六'];

const logPerson = (person, index) => {
  console.log(`${index} - ${person}`);
};

person.forEach(logPerson);

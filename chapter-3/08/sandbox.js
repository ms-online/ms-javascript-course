// 变量 和 块级作用域
const age = 30;

if (true) {
  const age = 50;
  const name = 'Summer';
  console.log('代码块内部第一层：', age, name);

  if (true) {
    const age = 25;
    const name = 'Lucy';
    console.log('代码块内部第二层：', age, name);
    var test = 'Hello World';
  }
}

console.log('代码块外部：', age, name, test);

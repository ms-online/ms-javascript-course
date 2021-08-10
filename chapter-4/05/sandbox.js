// 常规函数
// const calcArea = function (radius) {
//   return 3.14 * radius ** 2;
// };
// const area = calcArea(5);
// console.log(area);

//箭头函数
const calcArea = (radius) => 3.14 * radius ** 2;

const area = calcArea(5);
console.log(area);

//箭头函数练习
// const greet = function () {
//   return 'Hello World!';
// };

// const greet = () => 'Hello World!';
// console.log(greet());

// const bill = function (products, tax) {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

console.log(bill([5, 10, 15], 0.2));

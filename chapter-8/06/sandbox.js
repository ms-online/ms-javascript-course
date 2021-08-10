const fruits = [
  { name: 'apple', price: 10 },
  { name: 'orange', price: 8 },
  { name: 'grape', price: 20 },
  { name: 'watermelon', price: 5 },
  { name: 'peach', price: 6 },
];

// const filtered = fruits.filter((fruit) => fruit.price < 10);

// const result = filtered.map((fruit) => {
//   return `${fruit.name}它的优惠价格为：${fruit.price / 2}元 `;
// });

const result = fruits
  .filter((fruit) => fruit.price < 10)
  .map((fruit) => `${fruit.name}它的优惠价格为：${fruit.price / 2}元 `);

console.log(result);

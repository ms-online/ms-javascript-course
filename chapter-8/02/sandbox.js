// const prices = [20, 50, 15, 36, 18, 62, 74];

// const salePrices = prices.map((price) => {
//   return price / 2;
// });

// console.log(salePrices);
// console.log(prices);

const fruits = [
  { name: 'apple', price: 10 },
  { name: 'orange', price: 8 },
  { name: 'grape', price: 20 },
  { name: 'watermelon', price: 5 },
];

const salefruits = fruits.map((product) => {
  if (product.price >= 10) {
    // product.price = product.price / 2;
    // return product;
    return { name: product.name, price: product.price / 2 };
  } else {
    return product;
  }
});

console.log(salefruits);
console.log(fruits);

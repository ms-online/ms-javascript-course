// 集合
const namesArray = ['summer', 'lucy', 'henry', 'lucy'];
console.log(namesArray);

// const namesSet = new Set(['summer', 'lucy', 'henry']);
// const namesSet = new Set(namesArray);

// console.log(namesSet);

// const uniqueNames = [...namesSet];

const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);

const ages = new Set();

ages.add(19);
ages.add(25).add(30);
ages.add(19);
ages.delete(25);

// console.log(ages, ages.size);

const users = new Set([
  { name: 'lucy', age: 30 },
  { name: 'henry', age: 32 },
]);

console.log(users);

users.forEach((user) => {
  console.log(user.name, user.age);
});

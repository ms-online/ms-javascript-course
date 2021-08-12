//async 和 await

const getTodos = async () => {
  const response = await fetch('test/henry.json');
  const data = await response.json();

  return data;
};

console.log(1);
console.log(2);
getTodos().then((data) => console.log('resovled:', data));
console.log(3);
console.log(4);

// fetch('test/summer.json')
//   .then((response) => {
//     console.log('resolve:', response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log('rejected', err);
//   });

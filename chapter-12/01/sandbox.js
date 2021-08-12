// rest 参数
const double = (...nums) => {
  console.log(nums);
  return nums.map((num) => num * 2);
};

const result = double(1, 2, 3, 4, 6, 7, 4, 7, 10);
console.log(result);

// spread 语法 （数组）
const users = ['summer', 'lucy', 'henry'];
const members = ['lily', 'tom', ...users];
console.log(members);

// spread 语法 （对象）
const people = { name: 'John', age: 30, job: 'teacher' };
const peopleClone = { ...people, location: 'chengdu' };

people.age = 40;
console.log(peopleClone);

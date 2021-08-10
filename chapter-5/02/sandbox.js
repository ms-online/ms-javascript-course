// 对象字面量
let user = {
  name: 'summer',
  age: 28,
  email: 'summer@test.com',
  location: '成都',
  hobbies: ['看电影', '羽毛球', '唱歌'],
};

console.log(user);
console.log(user.name);

// user.age = 30;
console.log(user.age);

const key = 'location';
console.log(user[key]);

user['name'] = 'lucy';
console.log(user['name']);

console.log(typeof user);

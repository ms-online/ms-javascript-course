// 添加方法
let user = {
  name: 'summer',
  age: 28,
  email: 'summer@test.com',
  location: '成都',
  hobbies: ['看电影', '羽毛球', '唱歌'],
  login: function () {
    console.log('用户已经登录');
  },
  logOut: function () {
    console.log('用户已经退出登录');
  },
  logHobies: function () {},
};

user.login();
user.logOut();

const name = 'Henry';
name.toUpperCase();

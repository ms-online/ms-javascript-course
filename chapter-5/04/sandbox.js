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
  logHobbies() {
    // console.log(hobbies);
    // console.log(this.hobbies);
    this.hobbies.forEach((hobby) => {
      console.log(hobby);
    });
    // console.log(this);
  },
};

// console.log(this);
user.logHobbies();

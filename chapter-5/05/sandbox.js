// const blogs = [
//   { title: '第一篇博客', author: 'Summer', likes: 50 },
//   { title: '第二篇博客', author: 'Summer', likes: 100 },
// ];

// console.log(blogs);

// 添加方法
let user = {
  name: 'summer',
  age: 28,
  email: 'summer@test.com',
  location: '成都',
  hobbies: ['看电影', '羽毛球', '唱歌'],
  blogs: [
    { title: '第一篇博客', author: 'Summer', likes: 50 },
    { title: '第二篇博客', author: 'Summer', likes: 100 },
  ],
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
  logBlogs() {
    this.blogs.forEach((blog) => {
      console.log(blog.title);
    });
  },
};

// console.log(this);
// user.logHobbies();
user.logBlogs();

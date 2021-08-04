const title = 'JS的前世今生';
const author = '老吴与小仙';
const likes = 100;

// +进行串联
// let result =
//   author + '编写的博客文章' + title + '获得了 ' + likes + ' 个点赞。';

// 模版字符串
let result = `${author}编写的博客文章${title}获得了 ${likes} 个点赞。`;
console.log(result);

// 创建html模版
let html = `
  <h2>${title}</h2>
  <p>${author}</p>
  <span>点赞个数为${likes}</span>
`;
console.log(html);

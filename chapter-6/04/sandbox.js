// const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText += ' 你好,世界！';

// const paras = document.querySelectorAll('p');
// paras.forEach((para) => {
//   console.log(para.innerText);
//   para.innerText += ' 新文本';
// });

const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML = '<h2>JavaScript完整课程指南</h2>';

const users = ['summer', 'lucy', 'henry'];

users.forEach((user) => {
  content.innerHTML += `<p>${user}</p>`;
});

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   console.log('已经点击');
// });

const items = document.querySelectorAll('li');

items.forEach((item) => {
  item.addEventListener('click', (e) => {
    // console.log(e);
    // console.log('itme被点击');
    // console.log(e.target);
    // console.log(item);
    e.target.style.textDecoration = 'line-through';
  });
});

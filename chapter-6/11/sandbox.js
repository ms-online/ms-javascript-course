const ul = document.querySelector('ul');
const items = document.querySelectorAll('li');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  // ul.innerHTML += '<li>新任务</li>';
  const li = document.createElement('li');
  li.textContent = '新任务';
  // ul.append(li);
  ul.prepend(li);
});

// items.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     // console.log('li中的事件');
//     // e.stopPropagation();
//     // e.target.style.textDecoration = 'line-through';
//     // e.target.remove();
//   });
// });

ul.addEventListener('click', (e) => {
  // console.log('ul中的事件');
  // console.log(e.target);
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});

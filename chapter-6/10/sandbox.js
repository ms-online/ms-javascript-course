const ul = document.querySelector('ul');
// ul.remove();
const items = document.querySelectorAll('li');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  // ul.innerHTML += '<li>新任务</li>';
  const li = document.createElement('li');
  li.textContent = '新任务';
  // ul.append(li);
  ul.prepend(li);
});

items.forEach((item) => {
  item.addEventListener('click', (e) => {
    // e.target.style.textDecoration = 'line-through';
    e.target.remove();
  });
});

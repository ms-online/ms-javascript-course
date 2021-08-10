const copy = document.querySelector('.copy');

copy.addEventListener('copy', () => {
  console.log('你正在执行复制的操作！');
});

const box = document.querySelector('.box');

box.addEventListener('mousemove', (e) => {
  // console.log(e);
  // console.log(e.offsetX, e.offsetY);
  box.textContent = `x坐标 - ${e.offsetX}  y坐标 - ${e.offsetY}`;
});

document.addEventListener('wheel', (e) => {
  console.log(e.pageX, e.pageY);
});

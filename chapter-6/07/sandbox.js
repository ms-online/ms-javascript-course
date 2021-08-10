// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('success');
// content.classList.remove('success');
// content.classList.add('error');

const paras = document.querySelectorAll('p');

console.log(paras);

paras.forEach((para) => {
  if (para.textContent.includes('success')) {
    para.classList.add('success');
  }

  if (para.innerText.includes('error')) {
    para.classList.add('error');
  }
});

const title = document.querySelector('h1');

title.classList.toggle('test');

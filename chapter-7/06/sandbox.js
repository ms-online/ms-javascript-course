const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-z]{6,12}$/;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  //表单验证
  const username = form.username.value;

  if (usernamePattern.test(username)) {
    //反馈验证通过的信息
    feedback.textContent = '用户名验证通过';
  } else {
    //反馈验证不通过的信息
    feedback.textContent = '用户名必须由小写字母构成并且长度在6到12之间';
  }
});

// 键盘事件（实时反馈）
form.username.addEventListener('keyup', (e) => {
  console.log(e);
  // console.log(e.target.value, form.username.value);
  if (usernamePattern.test(e.target.value)) {
    form.username.setAttribute('class', 'success');
  } else {
    form.username.setAttribute('class', 'error');
  }
});

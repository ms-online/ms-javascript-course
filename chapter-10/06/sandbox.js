const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      // console.log(request, request.responseText);
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      // console.log('无法获取数据');
      callback('无法获取数据', undefined);
    }
  });

  request.open('GET', 'http://jsonplaceholder.typicode.com/todos');
  request.send();
};

console.log('1');
console.log('2');
getTodos((err, data) => {
  console.log('触发回调函数');
  // console.log(err, data);
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
console.log('3');
console.log('4');

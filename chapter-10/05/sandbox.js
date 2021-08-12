const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
  // console.log(request, request.readyState);
  if (request.readyState === 4 && request.status === 200) {
    console.log(request, request.responseText);
  } else if (request.readyState === 4) {
    console.log('无法获取数据');
  }
});

request.open('GET', 'http://jsonplaceholder.typicode.com/todoss');
request.send();

const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('无法请求数据');
      }
    });

    request.open('GET', resource);
    request.send();
  });
};

getTodos('test/summer.json')
  .then((data) => {
    console.log(data);
    return getTodos('test/lucy.json');
  })
  .then((data) => {
    console.log(data);
    return getTodos('test/henry.json');
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

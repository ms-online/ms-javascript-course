const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback('无法获取数据', undefined);
    }
  });

  request.open('GET', resource);
  request.send();
};

getTodos('test/summer.json', (err, data) => {
  console.log(data);
  getTodos('test/lucy.json', (err, data) => {
    console.log(data);
    getTodos('test/henry.json', (err, data) => {
      console.log(data);
    });
  });
});

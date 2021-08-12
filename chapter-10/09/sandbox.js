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
  })
  .catch((err) => {
    console.error(err);
  });

// promise 例子
const getSomething = () => {
  return new Promise((resolve, reject) => {
    // 请求数据
    resolve('some data');
    // reject('some error');
  });
};

// getSomething().then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// getSomething()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//throw Error

const getTodos = async () => {
  const response = await fetch('test/henrys.json');
  if (response.status !== 200) {
    throw new Error('无法获取数据');
  }
  const data = await response.json();

  return data;
};

getTodos()
  .then((data) => console.log('resovled:', data))
  .catch((err) => console.log('reject:', err.message));

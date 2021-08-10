// 返回值

// const greeting = function (name = 'Henry', time = 'evening') {
//   console.log(`Good ${time}, my name is ${name}`);
// };

const calcArea = function (radius) {
  return 3.14 * radius ** 2;

  // console.log(area);
};

const area = calcArea(10);
console.log(area);

const calcVol = function (area) {
  let volume = area * 10;
  return volume;
};
const volume = calcVol(area);
console.log(volume);

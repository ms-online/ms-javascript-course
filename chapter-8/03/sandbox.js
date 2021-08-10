// const scores = [98, 76, 55, 47, 85, 100];

// const result = scores.reduce((acc, score) => {
//   if (score >= 60) {
//     acc++;
//   }
//   return acc;
// }, 0);

// console.log(result);

const scores = [
  { student: 'summer', score: 90 },
  { student: 'lucy', score: 100 },
  { student: 'summer', score: 60 },
  { student: 'lucy', score: 80 },
  { student: 'summer', score: 80 },
];

const summerTotal = scores.reduce((acc, curr) => {
  if (curr.student === 'summer') {
    acc += curr.score;
  }
  return acc;
}, 0);

console.log(summerTotal);

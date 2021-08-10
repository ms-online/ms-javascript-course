//字符串排序
const names = ['summer', 'lucy', 'henry', 'tom'];

names.sort();
names.reverse();
// console.log(names);

//number排序
const scores = [10, 20, 11, 3, 49, 4, 35];
scores.sort((a, b) => b - a);
scores.reverse();
console.log(scores);

//对象排序
const students = [
  { student: 'summer', score: 90 },
  { student: 'lucy', score: 100 },
  { student: 'summer', score: 60 },
  { student: 'lucy', score: 80 },
  { student: 'summer', score: 80 },
];

// students.sort((a, b) => {
//   if (a.score > b.score) {
//     return -1;
//   } else if (b.score > a.score) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

students.sort((a, b) => a.score - b.score);

console.log(students);

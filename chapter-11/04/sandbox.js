const scores = [
  { student: 'summer', score: 90 },
  { student: 'lucy', score: 100 },
  { student: 'summer', score: 60 },
  { student: 'lucy', score: 80 },
  { student: 'summer', score: 80 },
];

// console.log(JSON.stringify(scores));

localStorage.setItem('scores', JSON.stringify(scores));

const stored = localStorage.getItem('scores');

console.log(JSON.parse(stored));

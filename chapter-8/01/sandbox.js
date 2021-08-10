// const scores = [12, 24, 18, 20, 7, 35, 40];

// const filteredScores = scores.filter((score) => {
//   return score >= 20;
// });

// console.log(scores);
// console.log(filteredScores);

const users = [
  { name: 'John', isLogin: true },
  { name: 'Lucy', isLogin: false },
  { name: 'Summer', isLogin: false },
  { name: 'Henry', isLogin: true },
];

const LoginUsers = users.filter((user) => {
  return user.isLogin;
});

console.log(LoginUsers);

// break 和 continue
// break：退出整个for循环
// continue 终止当前循环，并进入下一次循环
const scores = [86, 74, 0, 92, 69, 100, 79];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    continue;
  }

  console.log('得分为：', scores[i]);

  if (scores[i] === 100) {
    console.log('恭喜你，得到了满分！');
    break;
  }
}

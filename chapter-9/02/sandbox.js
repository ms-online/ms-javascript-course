// 时间戳
const before = new Date('February 1 2020 21:10:30');
const now = new Date();

// console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(mins, hours, days);
console.log(`这篇博客是${days}天前创建的`);

const timestamps = 1628602116106;
console.log(new Date(timestamps));

const now = new Date();

console.log(now);
console.log(typeof now);

//年，月，日，时间
console.log('getFullYear:', now.getFullYear());
console.log('getMonth:', now.getMonth());
console.log('getDate:', now.getDate());
console.log('getDay:', now.getDay());
console.log('getHours:', now.getHours());
console.log('getMinutes:', now.getMinutes());
console.log('getSeconds:', now.getSeconds());

//timestamps 时间戳 1970年1月1日至今
console.log('timestamps:', now.getTime());

// 日期字符串
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

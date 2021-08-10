const now = dayjs();

// console.log(now);

// console.log(now.format('DD/MM/YYYY'));

const date1 = dayjs('2019-01-25');
const date2 = dayjs('2018-06-05');

console.log(date1.diff(date2, 'day'));

console.log(dayjs().isBefore(dayjs('2031-01-01')));

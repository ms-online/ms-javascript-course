const symbolOne = Symbol('friends');
const symbolTwo = Symbol('friends');

console.log(symbolOne, symbolTwo, typeof symbolOne);
console.log(symbolOne == symbolTwo);

const summer = {};

summer.age = 25;
summer['hobby'] = 'sports';
summer['hobby'] = 'music';

summer[symbolOne] = 'lucy';
summer[symbolTwo] = 'henry';

console.log(summer);

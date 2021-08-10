// 形参 和 实参

const greeting = function (name = 'Henry', time = 'evening') {
  console.log(`Good ${time}, my name is ${name}`);
};

greeting();
greeting('Summer', 'morning');
greeting('Lucy', 'night');

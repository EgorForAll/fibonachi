const createFibonachiArray = (firstValue, secondValue) => {
  let arr = [];
  arr.push(firstValue);
  for (let i = secondValue; i <= 7000000; i = i + arr[arr.length - 2]) {
    arr.push(i);
  }
  return arr;
};

const fibonachiArr = createFibonachiArray(3, 4);

const findSumOfEvens = (sum, current) => {
  if (current % 2 === 0) {
    sum = sum + current;
  }
  return sum;
};

const result = fibonachiArr.reduce(findSumOfEvens, 0);

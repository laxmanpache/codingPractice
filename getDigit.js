// get digit at specific position

const getDigit = (num, i) => {
  console.log(num, i);
  return Math.floor(Math.abs(num)/Math.pow(10,i))%10
};

console.log(getDigit(7323,3))

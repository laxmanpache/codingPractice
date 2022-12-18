/*

-  write radix sort
-i/p as an array
-o/p sorted array
alogo
 - write helper function 
  - getdigit at specific position 
  -get length of number
  -get max length of number from array
  iterate  from k=0 ; to max number of length of digit
  -create empty array bucket 0 to 9
  -iterate through array from 0 to nums.length;
  put number in secific bucket 
  - concat all bucket 
  - follow  process repetdtly
  at end retun  array

*/

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
// console.log(getDigit(45673, 3));
function getDigitLength(num) {
  return Math.floor(Math.log10(num)) + 1;
}
function getMaxNumberLength(nums) {
  let maxLength = 0;
  for (let i = 0; i < nums.length; i++) {
    maxLength = Math.max(maxLength, getDigitLength(nums[i]));
  }
  return maxLength;
}

// console.log(getMaxNumberLength([2, 6666666, 2, 45, 123]));

const RadixSort = (nums) => {
  const maxlength = getMaxNumberLength(nums);
  for (let i = 0; i < maxlength; i++) {
    const digitBucket = Array.from({ length: 10 }, () => []);
    // console.log(digitBucket);
    for (let j = 0; j < nums.length; j++) {
      const digit = getDigit(nums[j], i);
      digitBucket[digit].push(nums[j]);
    }
    nums = [].concat(...digitBucket);
  }
  return nums;
};

console.log(RadixSort([10, 4000, 3, 56, 78, 12, 34, 9, 0]));

/*
  - quick sort
  s

  time complexity O(n log(n))


*/

const Pivote = (arr, start = 0, end = arr.length + 1) => {
  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  let PivoteEle = arr[start];
  let pivoteIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < PivoteEle) {
      pivoteIndex++;
      swap(arr, pivoteIndex, i);
    }
  }
  swap(arr, start, pivoteIndex);
  return pivoteIndex;
};

const Quick = (arr, left = 0, right = arr.length - 1) => {
  const PIndex = Pivote(arr, left, right);
  if (left < right) {
    Quick(arr, left, PIndex - 1);
    Quick(arr, PIndex + 1, right);
  }
  return arr;
};

console.log(Quick([8, 5, 2, 9, 10, 24, 3, 5, 7]));

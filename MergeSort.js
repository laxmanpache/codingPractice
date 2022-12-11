/*

- wiite logic for merge sort


*/

const mergeSortedArray = (arr1, arr2) => {
  console.log({ arr1, arr2 });
  let l1 = 0;
  let l2 = 0;
  let arr3 = [];
  console.log({ l1, l2 });
  while (l1 < arr1?.length && l2 < arr2?.length) {
    if (arr1[l1] < arr2[l2]) {
      arr3.push(arr1[l1]);
      l1++;
    }
    if (arr1[l1] >= arr2[l2]) {
      arr3.push(arr2[l2]);
      l2++;
    }
  }
  while (l1 < arr1?.length) {
    arr3.push(arr1[l1]);
    l1++;
  }
  while (l2 < arr2?.length) {
    arr3.push(arr2[l2]);
    l2++;
  }
  console.log(arr3);
  return arr3;
};

const mergeFunction = (arr1) => {
  if (arr1.length <= 1) return arr1;
  const mid = Math.floor(arr1.length - 1 / 2);
  let left = mergeFunction(arr1.slice(0, mid));
  let right = mergeFunction(arr1.slice(mid));
  return mergeSortedArray(left, right);
};

console.log(mergeFunction([2, 3, 5, 2, 1, 7, 8, 3, 2, 90, 11, 3, 56]));

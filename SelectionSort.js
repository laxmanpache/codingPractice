//Selection sort
/*
- in this we need to find smallest element in array and then swap it to first element of array
- in this swaping happne at end of each iteration 

-time complexity O(n^2)
*/

const SelectionSort = (arr) => {
  let lowest;
  for (let i = 0; i < arr.length; i++) {
    lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
    //   console.log({ lowest, j });
      if(arr[j]<arr[lowest]  && arr[lowest]!==arr[j]){
        [arr[j],arr[lowest]]=[arr[lowest],arr[j]]
      }
    }
  }
  return arr;
};

console.log(SelectionSort([3, 2, 56, 4, 9, 4]));

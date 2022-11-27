// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

/*
- create function called binary search 
- it will accept sorted array
-crate two pionter left and right
initilize left=0 and right=arr.length;
check till left is <= right 
- find mid = left+rigtht /2
-if nums[mid] is equal to num retun mids
-if arr[mid]<num then left=mid+1;
-if arr[mid]> num then right = mid-1;

if not fond then return -1

*/

const BinarySearch=(nums,num)=>{
    let left=0;
    let right=nums.length-1;
    let mid;

    while(left<=right){
        mid=Math.floor((left+right)/2)
        if(nums[mid]===num)
          return mid;
        if(nums[mid]<num)
          {
            left=mid+1
          }
        else
          right=mid-1;
        
    }
    return -1;


}
console.log(BinarySearch([1,2,3,4,5,6,7],10))

// implement leanear search algorithum
//i/p input ans an array of number and  element what want ro seach in an array
//o/p output as an index of number where element is found in array if not found return -1;

const LinearSearch=(arr , item)=>{
    for (let i=0;i<arr.length;i++){
        if(arr[i]===item )
          return i;
    }
    return -1;
}

console.log(LinearSearch([2,5,4,1,7,8],1))
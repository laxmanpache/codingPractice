/*
- insertion sort
in this we  dvide array into two list sorted and unsorted,
- first element is already sorted
- we start form 2nd element and check his posiiotn in  sorted part 
- and put this elemnt in sorted  that posiotion

*/

const insertionSort=(arr)=>{

    for(let i=1;i<arr.length;i++){
        let currentval=arr[i]
           for (var j=i-1; j>=0 && arr[j]>currentval;j--){
               arr[j+1]=arr[j]
           }
           arr[j+1]=currentval;
    }

    return arr;
}

console.log(insertionSort([4,5,2,6,7]))
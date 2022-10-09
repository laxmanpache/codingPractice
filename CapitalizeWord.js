// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.


/*
- i/p function take an inpput as an array of string
-o/p function will return array of string with each word as an capitalize



*/
// function capitalizeWords (array) {
//     if (array.length === 1) {
//       return [array[0].toUpperCase()];
//     }
//     let res = capitalizeWords(array.slice(0, -1));
//     res.push(array.slice(array.length-1)[0].toUpperCase());
//     return res;
   
//   }
let words = ['i', 'am', 'learning', 'recursion'];
const capitalizeWords=(arr)=>{
//  console.log(arr)
    if(arr.length ===1)
    {
        // console.log("hello")
        return [arr[0].toUpperCase()]
    }
     let res=capitalizeWords(arr.slice(0,-1));
    //  console.log(arr.slice(arr.length-1)[0])
     res.push(arr.slice(arr.length-1)[0].toUpperCase())
    return res;
}

console.log(capitalizeWords(words))
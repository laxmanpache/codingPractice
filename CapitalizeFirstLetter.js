// function capitalizeWords(array) {
//   if (array.length === 1) {
//     return [array[0].toUpperCase()];
//   }
//   let res = capitalizeWords(array.slice(0, -1));
//   res.push(array.slice(array.length - 1)[0].toUpperCase());
//   return res;
// }
// console.log(capitalizeWords(["laxman", "ram"]));

//   write functon to capitalize first  letter of array item
// i/p take string array as an input
// o/p string array with first letter of each item is an capitalize
let newArray=[];
const capitalizeFirstLetter = (array) => {
  if (array.length <= 0) return false;
    if (array.length >= 1) {
  array[0] = array[0].charAt(0).toUpperCase() + array[0].slice(1);
  newArray.push(array[0]);
    }
    // console.log(newArray)
  capitalizeFirstLetter(array.slice(1));

    return  newArray;
};
console.log(capitalizeFirstLetter(["laxman", "ram", "shyam", "mohan"]));

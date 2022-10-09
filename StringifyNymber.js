// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

//i/p function take object as an input

//o/p return all number present in object
// let sum = 0;
// const StringifyNumber = (obj) => {
//   let Keys = Object.keys(obj);
//   for (let i = 0; i < Keys.length; i++) {
//     // console.log(Keys[i]);
//     // console.log(Keys)
//     // console.log(obj[Keys[i]])
//     if (typeof obj[Keys[i]] === "object") {
//       StringifyNumber(obj[Keys[i]]);
//     }
//     if (typeof obj[Keys[i]] === "number") {
//       sum += obj[Keys[i]];
//     }
//   }
//   return sum;
// };

const stringifyNumbers = (obj) => {
    let NewObj = {};
      for (let key in obj) {
          if(typeof obj[key]==='number')
            NewObj[key]=obj[key].toString();
          else if(typeof obj[key]==='object' && !Array.isArray(obj[key]))
            {
              NewObj[key] = stringifyNumbers(obj[key])
            }
            else{
              NewObj[key]=obj[key]
            }
      }
  
  return NewObj;
  };
  
let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};
console.log(stringifyNumbers(obj));

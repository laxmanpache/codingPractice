// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

// i/p input as an object
// o/p output as array which contain arary of string
/*
 write function called colletStrings
 - in that user will give an  input as object
 -function will process that object
 - check if inside of object any values of  type as string which will be store in and string array
 - finally function will return array of string
*/
let arr = [];
const collectStrings = (obj) => {
  for (key in obj) {
    if (typeof obj[key] === "string") {
      arr.push(obj[key]);
    }
    if (typeof obj[key] === "object") collectStrings(obj[key]);
  }
  return arr;
};

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj));

/*
--Find Substring ---
- loop over longer string
- loop over shorter string
-if charater don't match break out of inner loop
-if character fo match keep going
-if you completed inner loop and find the match , then increment the count of matches
- return the count
-



*/
const FindSubString = (string1, find) => {
  let count = 0;
  console.log(string1);
  console.log(find);
  for (let i = 0; i <= string1.length - 1; i++) {
    for (let j = 0; j <= find.length - 1; j++) {
      if (string1[i+j] !== find[j]) {
        break;
      }
      if (j === find.length - 1) count += 1;
    }
  }
  console.log(count);
};

FindSubString("lsdfsd sds dfsd lsx dfsd l lax lsd lsd sdfsd sdfsdflsd", "lsd");

/* Support functions
*/
// const eqArrays = function(act, exp) {
//   let equal = true;

//   if (act.length !== exp.length) {
//     return false;
//   } else {
//     for (var counter = 0; counter < act.length; counter++)
//     if (act[counter] != exp[counter]) {
//       console.log(act + exp);
//       equal = false;
//     }
//   }
//   return equal;
// };

// // Use Template Literals
// const assertArraysEqual = function(actual, expected) {
//   const passStr = "Assertion Passed: ";
//   const failStr = "Assertion Failed: ";
//   const pass = " === ";
//   const fail = " !== ";

//   if (eqArrays(actual,expected)) {
//     console.log(`${passStr} [${actual}]${pass}[${expected}]`);
//     //Assertion Passed: [actual] === [expected] (but with the values filled in)
//   } else {
//     console.log(`${failStr} [${actual}]${fail}[${expected}]`);
//     //Assertion Failed: [actual] !== [expected] (but with the values filled in)
//   }
// };
/*
*/
const letterPositions = function(sentence) {
  const results = {};
  const senArray = sentence.slice();

  for(var outter = 0; outter < senArray.length; outter++) { //loop through the input setnence
    var letter = senArray[outter]; //take the current letter

    if(letter in results) { //check if the letter is already in the results object
      results[letter].push(outter); //if object already in, simply push it into the array
    } else {
      results[letter] = []; // create an array and push if this is the first occurence
      results[letter].push(outter);
      }
      //console.log(results); //uncomment to allow for code debug
  }
  return results;
};

module.exports = letterPositions;

/* Test cases */
// assertArraysEqual(letterPositions("hello").e, [1]);
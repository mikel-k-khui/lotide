// Use Template Literals
// const assertEqual = function(actual, expected) {
//   const passStr = "Assertion Passed: ";
//   const failStr = "Assertion Failed: ";
//   const pass = " === ";
//   const fail = " !== ";
  
//   let str = "";
//   let cond = "";

//   if (actual === expected) {
//     str = passStr;
//     cond = pass;
//     //Assertion Passed: [actual] === [expected] (but with the values filled in)
//   } else {
//     str = failStr;
//     cond = fail;
//     //Assertion Failed: [actual] !== [expected] (but with the values filled in)
//   }
//   console.log(`${str} [${actual}]${cond}[${expected}]`);
// };

// FUNCTION IMPLEMENTATION
const eqArrays = function(actual, expected) {
  let equal = true;
  
  if (actual.length !== expected.length) {
    return false; // arrays are different
  } else {
    for (var counter = 0; counter < actual.length; counter++) {
      if(Array.isArray(actual[counter]) != Array.isArray(expected[counter])) {
        return false;
      } else if (Array.isArray(actual[counter]) && Array.isArray(expected[counter])) {
        equal = eqArrays(actual[counter],expected[counter]);  // recursive function for cases when array within array
      } else if (actual[counter] !== expected[counter]) {
        return false;
      }
    }
    //base case when the array item is primitive value and equals
  }
  return equal;
};

module.exports = eqArrays;

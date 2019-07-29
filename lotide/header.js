/* The head function should not return the first element as an array. It should simply return the element itself

Special circumstances to consider:
An array with only one element should still yield that one element as its head
An empty array should yield undefined as its head
*/

// // Use Template Literals
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

const assertEqual = require('./assertEqual');

const head = function(input) {
  if (input.length === 0) {
    return undefined;
  } else if (Array.isArray(input[0])) {
    if (input[0].length === 0) {
      return undefined;
    } else {
      return input[0][0];
    }
  } else {
    return input[0];
  }
};


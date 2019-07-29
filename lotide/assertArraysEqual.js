// FUNCTION IMPLEMENTATION
// const eqArrays = function(actual, expected) {
//   let equal = true;
  
//   if (actual.length !== expected.length) {
//     return false;
//   } else {
//     for (var counter = 0; counter < actual.length; counter++)
//     if (actual[counter] !== expected[counter]) {
//       equal = false;
//     }
//   }
//   return equal;
// };

const eqArrays = require('./eqArrays');

// Use Template Literals
const assertArraysEqual = function(actual, expected) {
  const passStr = "Assertion Passed: ";
  const failStr = "Assertion Failed: ";
  const pass = " === ";
  const fail = " !== ";

  if (eqArrays(actual,expected)) {
    console.log(`${passStr} [${actual}]${pass}[${expected}]`);
    //Assertion Passed: [actual] === [expected] (but with the values filled in)
  } else {
    console.log(`${failStr} [${actual}]${fail}[${expected}]`);
    //Assertion Failed: [actual] !== [expected] (but with the values filled in)
  }
};

module.exports = assertArraysEqual;

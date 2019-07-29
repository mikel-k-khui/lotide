/* The tail function should return a new array excluding the first element
An array with only one element should yield an empty array for its tail
An empty array should yield an empty array for its tail
*/


/* Allow any input values including arrays
const assertEqual = function(actual, expected) {
  const passStr = "Assertion Passed: ";
  const failStr = "Assertion Failed: ";
  const pass = " === ";
  const fail = " !== ";
  
  let str = "";
  let cond = "";
  let actualStr = "";
  let expectedStr = "";

  let actualStr = [].actual;
  let expectedStr = [].expected;

  if (actual.length === expected.length) {
    str = passStr;
    cond = pass;
    //Assertion Passed: [actual] === [expected] (but with the values filled in)
    for (var count = 0; count < actual.length ; count++) {
      if (actual[count] !== expected[count]) {
        str = failStr;
        cond = fail;
        //Assertion Failed: [actual] !== [expected] (but with the values filled in)
      }   
    } 
  } else {
    str = failStr;
    cond = fail;
    //Assertion Failed: [actual] !== [expected] (but with the values filled in)
  }
  console.log(`${str} [${actual}]${cond}[${expected}]`);
};*/

// Single values only - no arrays
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

const tail = function(input) {
  var output = [];
  if (input.length < 2) {
    return [];
  } else {
    input.shift();
    return input;
  }
};

module.exports = tail;
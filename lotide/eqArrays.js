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

// Use Template Literals
const assertEqual = function(actual, expected) {
  const passStr = "Assertion Passed: ";
  const failStr = "Assertion Failed: ";
  const pass = " === ";
  const fail = " !== ";
  
  let str = "";
  let cond = "";

  if (actual === expected) {
    str = passStr;
    cond = pass;
    //Assertion Passed: [actual] === [expected] (but with the values filled in)
  } else {
    str = failStr;
    cond = fail;
    //Assertion Failed: [actual] !== [expected] (but with the values filled in)
  }
  console.log(`${str} [${actual}]${cond}[${expected}]`);
};


// TEST CODE
assertEqual("Bootcamp", "Bootcamp"); //identifical string
assertEqual("BOOTcamp", "Bootcamp"); //different string
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1); //identifical number
assertEqual(1.000, 1); //different number format
assertEqual("1.0", 1); //different number format

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

assertEqual(eqArrays(["1", "2", "3", ["1", ["2"]]], ["1", "2", "3", ["1", ["2"]]]), true);
assertEqual(eqArrays(["1", "2", "3", [1, ["2"]]], ["1", "2", "3", ["1", ["2"]]]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
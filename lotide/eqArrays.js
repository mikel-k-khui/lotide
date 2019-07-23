// FUNCTION IMPLEMENTATION
const eqArrays = function(actual, expected) {
  let equal = true;
  
  if (actual.length !== expected.length) {
    return false;
  } else {
    for (var counter = 0; counter < actual.length; counter++)
    if (actual[counter] !== expected[counter]) {
      equal = false;
    }
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

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
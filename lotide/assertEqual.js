/* FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  
  if(actual === expected) {
    console.log("Assertion Passed: [" + actual + "] === [" + expected + "]");//Assertion Passed: [actual] === [expected] (but with the values filled in)
  } else {
    console.log("Assertion Failed: [" + actual + "] !== [" + expected + "]");
    //Assertion Failed: [actual] !== [expected] (but with the values filled in)
  }
};*/

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

module.exports = assertEqual;
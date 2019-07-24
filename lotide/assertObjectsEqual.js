/*
Support functions
*/
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

/*
Support functions: Returns true if both objects have identical keys with identical values.
Otherwise you get back a big fat false!
*/
const eqObjects = function(object1, object2) {

  keys1 = Object.keys(object1);
  keys2 = Object.keys(object2);
  let currKey;

  if (keys1.length != keys2.length) return false;
  //return false if object of different number of objects

  for (currKey of keys1) { //loop through the objects
    // if one of the object's value is array but not both return false
    if (1 == (Array.isArray(object1[currKey]) + Array.isArray(object2[currKey]))) { return false;}
    else if (Array.isArray(object1[currKey]) && Array.isArray(object2[currKey])) {
      if(!eqArrays(object1[currKey],object2[currKey])) { return false;}
    }
    else if (!Array.isArray(object1[currKey]) && (object1[currKey] !== object2[currKey])) {
      return false;     // if the primitive value of one object's value does not equal the other
    }
  } 
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const passStr = "Assertion Passed: ";
  const failStr = "Assertion Failed: ";
  const pass = " === ";
  const fail = " !== ";

  const inspect = require('util').inspect; // <= add this line
  console.log(`Example label: ${inspect(actual)}`);

  if (eqObjects(actual,expected)) {
    console.log(`${passStr} [${inspect(actual)}]${pass}[${inspect(expected)}]`);
    //Assertion Passed: [actual] === [expected] (but with the values filled in)
  } else {
    console.log(`${failStr} [${inspect(actual)}]${fail}[${inspect(expected)}]`);
    //Assertion Failed: [actual] !== [expected] (but with the values filled in)
  }
};

/* Test cases 1 */
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false);

/* Test cases 2 */
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), false);
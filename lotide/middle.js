// FUNCTION IMPLEMENTATION
const eqArrays = function(act, exp) {
  let equal = true;
  
  if (act.length !== exp.length) {
    return false;
  } else {
    for (var counter = 0; counter < act.length; counter++)
    if (act[counter] !== exp[counter]) {
      equal = false;
    }
  }
  return equal;
};

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

const middle = function(array) {
  let middle;
  if(array.length < 3) {
    middle = [];
  } else {
    let temp = array.slice();
    let front = temp.splice((Math.floor(array.length / 2)) - 1, 2);
    temp = array.slice();
    let back = temp.splice((array.length - Math.floor(array.length / 2) - 1),2)

    assertArraysEqual(front, back);

    if (eqArrays(front, back)) {
      middle = back;
    } else {
      middle = back.splice(0,1);
    }
  }
  return middle;
};


// TEST CODE
middle([1]); // => []
middle([1, 2]); // => []
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
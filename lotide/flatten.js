// FUNCTION IMPLEMENTATION
const eqArrays = function(act, exp) {
  let equal = true;

  if (act.length !== exp.length) {
    return false;
  } else {
    for (var counter = 0; counter < act.length; counter++)
    if (act[counter] != exp[counter]) {
      console.log(act + exp);
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

const flatten = function(input) {
  let tempArray = input.slice();
  let flat = [];

  while (tempArray.length) {
    let check = tempArray.shift();
    if (Array.isArray(check)) {
      if (check.length !== 0) {
      // push back array items, won't modify the original input
      flat.push(flatten(check));
      }
    } else {
      flat.push(check);
    }
  }
  return flat;
};


// TEST CODE
//assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[],["a", "b", "c", ["d"]], ["f", "g"], ["3", "4"],"5",[]]), ["a","b","c","d","f","g","3","4","5"]); // always be false
/*
assertArraysEqual(flatten(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])
const words = ["hello", "world", "lighthouse"];
flatten(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the flatten function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/
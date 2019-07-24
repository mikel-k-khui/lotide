/* Support functions
*/
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
/*
*/
const letterPositions = function(sentence) {
  const results = {};
  const senArray = sentence.slice();

  for(var outter = 0; outter < senArray.length; outter++) {
    var letter = senArray[outter];

    if(letter in results) {
      results[letter].push(outter);
    } else {
      results[letter] = [];
      results[letter].push(outter);
      }
      console.log(results);
  }
  return results;
};

/* Test cases */
assertArraysEqual(letterPositions("hello").e, [1]);
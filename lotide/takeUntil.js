/* ----------------- Support Functions ----------------- */
const eqArrays = function(act, exp) {
  let equal = true;

  if (act.length !== exp.length) {
    return false;
  } else {
    for (var counter = 0; counter < act.length; counter++)
    if (act[counter] != exp[counter]) {
      //console.log(act + exp);
      equal = false;
    }
  }
  return equal;
};

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
/* ----------------- Implementation ----------------- */
const takeUntil = function(array, callback) {
  console.log(callback);
  let results = [];
  for (let item of array) {
    //console.log(callback(item));
    if (callback(item)) {
      return results;
    } else {
    //console.log(item);
    results.push(item);
    }
  }
  return results;
}


// Test cases
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]));

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ",");
console.log(assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]));

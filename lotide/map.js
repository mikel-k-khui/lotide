/* ----------------- Implementation ----------------- */
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
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    console.log(callback(item));
    results.push(callback(item));
  }
  return results;
}

/* test case #1
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
*/

//test case #2
const square = [3,5];
const results2 = map(square, num => num * num);
console.log(results2);

//test case #3
const finds = [["dog", "cat", "mice"],["cat", "mice"],["dolphin", "dog"]];
const results3 = map(finds, find => find.includes("dog"));
console.log(results3);

//test case #4
const animals = [["dog", "cat", "mice"],["cat", "mice"],["dolphin", "dog"]];
const results4 = map(animals, strJoin => strJoin.join(","));
console.log(results4);

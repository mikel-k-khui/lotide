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
const map = function(array, callback) {
  //console.log(callback());
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;
//test case #1
// let words = ["ground", "control", "to", "major", "tom"];
// let results1 = map(words, word => word[0]);
// console.log(assertArraysEqual(results1, ["g","c","t","m","t"]));

/*
//test case #2

const square = [3,5];
const results2 = map(square, num => num * num);
console.log(assertArraysEqual(results2, ["9","25"]));


//test case #3

const finds = [["dog", "cat", "mice"],["cat", "mice"],["dolphin", "dog"]];
const results3 = map(finds, find => find.includes("dog"));
console.log(assertArraysEqual(results3, [true, false, true]));


//test case #4

const animals = [["dog", "cat", "mice"],["cat", "mice"],["dolphin", "dog"]];
const results4 = map(animals, strJoin => strJoin.join(","));
console.log(assertArraysEqual(results4, [["dog,cat,mice"], ["cat,mice"], ["dolphin,dog"]]));
*/


// const factors = [3,5];
// const factorialize = function(num) { //call back function
//   return (num > 1) ? num *= factorialize(num-1) : 1;
// }
// const results5 = map(factors, factorialize); //passing the call back function in the map for iteration
// console.log(assertArraysEqual(results5,["6","120"]));

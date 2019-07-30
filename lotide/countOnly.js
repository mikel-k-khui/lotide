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
// const assertEqual = function(actual, expected) {
//   const passStr = "Assertion Passed: ";
//   const failStr = "Assertion Failed: ";
//   const pass = " === ";
//   const fail = " !== ";
  
//   let str = "";
//   let cond = "";

//   if (actual === expected) {
//     str = passStr;
//     cond = pass;
//     //Assertion Passed: [actual] === [expected] (but with the values filled in)
//   } else {
//     str = failStr;
//     cond = fail;
//     //Assertion Failed: [actual] !== [expected] (but with the values filled in)
//   }
//   console.log(`${str} [${actual}]${cond}[${expected}]`);
// };

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  results = {};
  for (const item of allItems) {
// inside the loop:
if (itemsToCount[item]) { 
  if (results[item]) {
    results[item] += 1;
  } else {
    results[item] = 1;
  }
}
}
return results;
};
module.exports = countOnly;

// TEST CODE
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
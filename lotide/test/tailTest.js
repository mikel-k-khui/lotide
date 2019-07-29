// test/tailTest.js

const tail = require('../tail.js');
const assertEqual = require('../assertEqual.js');

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
assertEqual(result, ["LIGHThouse", "Labs"]); // => will always fail!

// Test Case: Check the original array 
let words = ["Yo Yo", "Lighthouse", "Labs"];
test = tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(test.length, 2); // original array should still have 3 elements!

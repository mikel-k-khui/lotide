// test/tailTest.js
const assert = require('chai').assert;
const tail = require('../tail.js');
let words = [];
let test = [];

describe("#Tail", () => {

  it("should return ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  words = ["Yo Yo", "Lighthouse", "Labs"];
  test = tail(words);

  it("Original array should have 3 items", () => {
    assert.strictEqual(words.length, 3);
  });

  it("Remaining array after tail should have 2 items", () => {
    assert.strictEqual(test.length, 2);
  });
});

// // TEST CODE
// const result = tail(["Hello", "Lighthouse", "Labs"], ["Lighthouse", "Labs"]); // => will always fail!
// assertEqual(result, ["LIGHThouse", "Labs"]); // => will always fail!

// // Test Case: Check the original array 
// let words = ["Yo Yo", "Lighthouse", "Labs"];
// test = tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// assertEqual(test.length, 2); // original array should still have 3 elements!

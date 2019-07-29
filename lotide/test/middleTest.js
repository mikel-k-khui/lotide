// test/middleTest.js

const assert = require('chai').assert;
const middle = require('../middle.js');

// TEST CODE
describe("#middle", () => {
  it("returns [], [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
 
  it("returns [], [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [2], [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [3], [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
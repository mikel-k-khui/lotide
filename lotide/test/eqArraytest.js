// test/eqArraysTest.js

const eqArrays = require('../eqArrays.js');
const assertEqual = require('../assertEqual.js');

// TEST CODE
assertEqual("Bootcamp", "Bootcamp"); //identifical string
assertEqual("BOOTcamp", "Bootcamp"); //different string
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1); //identifical number
assertEqual(1.000, 1); //different number format
assertEqual("1.0", 1); //different number format

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

assertEqual(eqArrays(["1", "2", "3", ["1", ["2"]]], ["1", "2", "3", ["1", ["2"]]]), true);
assertEqual(eqArrays(["1", "2", "3", [1, ["2"]]], ["1", "2", "3", ["1", ["2"]]]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
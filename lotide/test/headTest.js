// test/headerTest.js

const head = require('../header');
const assertEqual = require('./assertEqual');

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([[5,6],6,7]), 5);
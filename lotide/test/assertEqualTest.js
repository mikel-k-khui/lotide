// test/assertEqualTest.js

const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual("Bootcamp", "Bootcamp"); //identifical string
assertEqual("BOOTcamp", "Bootcamp"); //different string
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1); //identifical number
assertEqual(1.000, 1); //different number format
assertEqual("1.0", 1); //different number format
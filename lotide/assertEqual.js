// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log("Assertion Passed: [" + actual + "] === [" + expected + "]");//Assertion Passed: [actual] === [expected] (but with the values filled in)
  } else {
    console.log("Assertion Failed: [" + actual + "] === [" + expected + "]");
    //Assertion Failed: [actual] !== [expected] (but with the values filled in)
  }
};


// TEST CODE
assertEqual("Bootcamp", "Bootcamp"); //identifical string
assertEqual("BOOTcamp", "Bootcamp"); //different string
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1); //identifical number
assertEqual(1.000, 1); //different number format
assertEqual("1.0", 1); //different number format
// FUNCTION IMPLEMENTATION
const eqArrays = function(act, exp) {
  let equal = true;
  
  if (act.length !== exp.length) {
    return false;
  } else {
    for (var counter = 0; counter < act.length; counter++)
    if (act[counter] !== exp[counter]) {
      equal = false;
    }
  }
  return equal;
};

// Use Template Literals
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

const without = function(source, itemsToRemove) {
  let tracker= [];
  let subset = source.slice();

  for(var remover = 0; remover < itemsToRemove.length; remover++) {
    let currentItem = itemsToRemove[remover];
    for(var counter = 0; counter < source.length; counter++) {
      if(currentItem === source[counter] && !tracker.includes(counter)) {
        tracker.push(counter);
      }
    }
  }
  
  tracker = tracker.sort(); //sort the tracker array to enable proper index item removeal
  
  for(var counter = 0; counter < tracker.length; counter++) {
    subset.splice(tracker[counter] - counter,1); // remove items based on the tracker and adjust for the position changes in the array size
  }
  return subset;
};


// TEST CODE
assertArraysEqual(without([1, 2, 3, 1, 2, 3], [1, 2]), [3, 3])
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])
const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
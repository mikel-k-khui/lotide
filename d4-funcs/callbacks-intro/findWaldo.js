// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  var i = 0;
  names.forEach(function (names) {
    
    if (names === "Waldo") {
      found(i);   // execute callback
    }
    i += 1;
  });
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log(`Found Waldo at index ${index}!`);
});
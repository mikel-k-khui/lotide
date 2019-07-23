/* Reverse am array of srings passed as terminal command lines (tcl)
1) loop through the terminal command lines after the node and script (i.e. 3rd in tcl)
2) pop the last element and shift the first element
3) insert last element with unshift() and push last element to the back
4) rejoin the array
5) output the joined array
*/

const args = process.argv;

const piglatin = function(tcl){
  for (counter = 2; counter < args.length; counter++) {
  var splitted = tcl[counter].split("");
  var first = splitted.shift();
  var last = splitted.pop();
  splitted.unshift(last);
  splitted.push(first,"ay");
  var joined = splitted.join("");
  console.log(joined);
}
};

piglatin(args); 

/* Reverse am array of srings passed as terminal command lines (tcl)
1) loop through the terminal command lines after the node and script (i.e. 3rd in tcl)
2) split each array item into a separate array
3) reverse the array created in step 2)
4) join the reversed array in step 3)
5) output the joined array
*/

const args = process.argv;

const reverse = function(tcl){
  for (counter = 2; counter < args.length; counter++) {
  var splitted = tcl[counter].split("");
  var reversed = splitted.reverse();
  var joined = reversed.join("");
  console.log(joined);
}
};

reverse(args); 

//define a list of honorifics
const honorific = { "Mr." : "Mr." , "Mrs." : "Mrs.", "Ms." : "Ms.", "Dr." : "Dr." };

//console.log(honorific);

const nameInverter = function(names) {
  let name= [];
  if (names === "") {
    return "";
  } else if (names === undefined) {
    throw new Error();
  }

  name = names.split(" ").filter(function (value) { return value != "";});
  //split the sting by space, then filter out all non-empty items (i.e. "") and return array of names

  // console.log(name);

  if (name.length === 1) {
    if (Object.values(honorific).indexOf(name[0]) > -1) {
      //single honorific only
      //console.log(`should be empty string`);
      return "";
    } else {
      //first name only
      //console.log(`should be single value ${name[0]}`);
      return name[0];
    };
  } else if (name.length === 2) {
    if (Object.values(honorific).indexOf(name[0]) > -1) {
      //honorific with first name
      // console.log(`should be honorific first value ${name[0]} ${name[1]}`);
      return name[0].concat(" ",name[1]);
    } else {
      //last, first
      // console.log(`should be last, first value ${name[1]}, ${name[0]}`);
      return name[1].concat(", ",name[0]);
    } 
  } else if (name.length === 3) {
    //honorific last, first
    // console.log(`should be honorific last, first value ${name[0]} ${name[2]}, ${name[1]}`);
    return name[0].concat(" ",name[2].concat(", ",name[1]));
  } else {
    throw new Error("Too many parameters");
  }
  //  return names;
}

module.exports = nameInverter;
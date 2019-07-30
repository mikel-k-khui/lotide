const nameInverter = function(name) {

  // if (name === '') {
  //   return '';
  // } else
  if (name === undefined) {
    console.log("Undefineed in function");
    throw new Error();
  }

  return name;
}

module.exports = nameInverter;
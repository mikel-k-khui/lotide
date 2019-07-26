const wrapLog = function (callback, name) {
  switch(name) {
    case "area": return  function(arg1, arg2) {
      let results = callback(arg1, arg2);
      console.log(`${name}(${arg1}, ${arg2}) => ${results}`);
    }
    break;
    case "volume": return  function(arg1, arg2, arg3) {
      let results = callback(arg1, arg2, arg3);
      console.log(`${name}(${arg1}, ${arg2}, ${arg3}) => ${results}`);
    }
    break;
    default: return undefined;
  }
};

const area = function (x, y) {
  return x * y;
};
const logArea = wrapLog(area, "area");

console.log(logArea(5, 3)); // area(5, 3) => 15
console.log(logArea(3, 2)); // area(3, 2) => 6

const volume = function (x, y, z) {
  return x * y * z;
};
const logVolume = wrapLog(volume, "volume");
// 
console.log(logVolume(5, 3, 2)); // volume(5, 3, 2) => 30
console.log(logVolume(3, 2, 4)); // volume(3, 2, 4) => 24
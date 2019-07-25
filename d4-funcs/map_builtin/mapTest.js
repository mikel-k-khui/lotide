const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

// write code here to use map
// It should output: [ 15, 13, 11, 16, 10, 11, 10 ]

const LHLen = lighthouses.map(len => len.length);
// LHLen is a variable calling an  anonymous function <length>(len){ return len.length;}
// while the map loops through the array and creating a different array
// function was reduced with the arrow to eliminate the function and return references

console.log(`It should output: ${LHLen}`);
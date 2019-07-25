const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35]; // define array

const passingGrades = grades.filter(g => g >= 70);
// passGrades is called with anonymous function(g){ return g >= 70;}
// function was reduced with the arrow to eliminate the function and return references

console.log(`The passing grades were: ${passingGrades}`);
let categories = [
 { id: 'animals', parent: null },
 { id: 'mammals', parent: 'animals' },
 { id: 'cats', parent: 'mammals' },
 { id: 'dogs', parent: 'mammals' },
 { id: 'chihuahua', parent: 'dogs' },
 { id: 'labrador', parent: 'dogs' },
 { id: 'persian', parent: 'cats' },
 { id: 'siamese', parent: 'cats' }
];

/* return a tree like description of the categories
{
  animal: {
    mammals: {
      cats: {
        persion: {},
        slamese: {}
      }
      dogs: {
        chihuahua: {}
        labrador: {}
      }
    }
  }
}
*/

let makeTree = (categories, parent) => { //use arrow function instead of function(var1, var2) {}
  let node = {}; //begin with an empty object

  categories //perform the below functions with nested commands
    .filter(c => c.parent === parent) //recursive case until parent is not found where it retursn null
    .forEach( c=> 
      node[c.id] = makeTree(categories, c.id)); //for each parent found, pass it to itself until it returns null
  return node;
}

console.log(
  JSON.stringify( // what is this?
  makeTree(categories, null)
  ,null,2)
);
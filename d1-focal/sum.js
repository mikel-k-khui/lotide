
/*
 * Testing out Command line arguements
 */

const args = process.argv;
//console.log(args;
console.log(args.slice(2,args.length));
let diff = args.length;
console.log(Number(args[diff - 2]) + Number(args[diff - 1]));
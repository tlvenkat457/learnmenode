var fs =require('fs');

var strings = fs.readFileSync(process.argv[2]).toString().split("\n").length;

console.log(strings-1);



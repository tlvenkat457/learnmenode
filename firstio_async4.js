var fs=require("fs");


fs.readFile(process.argv[2],callBack);


function callBack(err,data)
{

var length= data.toString().split("\n").length-1;

console.log(length);

}
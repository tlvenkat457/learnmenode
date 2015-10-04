var fs = require("fs");


fs.readdir(process.argv[2],callBack);

function callBack(err,list)
{

if(!err)
		{


for(var i=0;i<list.length;i++)
{

var fileName= list[i];
var fileWithOutExtension = fileName.split(".");
if (fileWithOutExtension[1]===process.argv[3]) {
console.log(fileName);

};

}
	}

	else{
console(err);
	}
}

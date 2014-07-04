/**
 * New node file
 */
var fs = require('fs');

var grains = ['wheat','rice','oats'];
var options = {encoding: 'utf8,', flag: 'w'};

var fileStream = fs.createWriteStream('grains.txt', options);

fileStream.on("close", function(){
	console.log("File Closed");
});

while (grains.length)
{
	var data = grains.pop() + " ";
	fileStream.write(data);
	console.log("Wrote: %s", data );
}

fileStream.end();
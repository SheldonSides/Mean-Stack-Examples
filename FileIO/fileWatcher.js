/**
 * New node file
 */
var fs = require('fs');

function log(string)
{
	console.log(string);
}

fs.watchFile("grains.txt", {persistent: true, interval: 5000}, function(curr,prev){
	log("grains.txt modified at: " + curr.mtime);
	log("grains.txt previous modified: " + prev.mtime);
});
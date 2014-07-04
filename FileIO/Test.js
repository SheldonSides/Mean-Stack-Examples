/**
 * New node file
 */
var fs = require('fs');

function log(string)
{
	console.log(string);
}

/*fs.exists("grains.txt", function(exists){
	console.log(exists ? "Path Exists" : "File does not exist");
});*/

fs.stat("grains.txt", function(err, stat){
	if(!err)
	{
		log('stats' + JSON.stringify(stat, null, ' '));
		log(stat.isFile() ? "Is a file" : "Is not a file")
		log(stat.isDirectory() ? "Is a directory" : "Is not a directory");
		log(stat.isSocket() ? "Is a socket" : "Is not a socket");		
	}	
});
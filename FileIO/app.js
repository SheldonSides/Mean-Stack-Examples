var fs = require('fs');


//Simple file writing
var config = {
	maxFiles: 20,
	maxConnections: 15,
	rootPath: "/webRoot"
};

var configSettings = JSON.stringify(config);
var options = {encoding: 'utf8', flag: 'w'};

console.log("Beginning Simple write");
console.log("Config settings are :" + configSettings);

fs.writeFile('config.txt', configSettings, options, function(err){
	if(err)
		{
			console.log("Config Write failed");
			//fs.close();
		}
	else
		{
			console.log("Config saved");
			//fs.close();
		}
});

console.log("Finished Simple file write");



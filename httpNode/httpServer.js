/**
 * New node file
 */
/*var http = require('http');

var options = {
		hostname: 'www.google.com',
		path: '/',
		port: '80',
		method: 'GET'
};

var req = http.request(options, function(response){
	
	var str = '';
	
	response.on("data", function(chunk){
		str += chunk;
	});
	
	response.on("end", function(){
		console.log(str);
	});
	
});

req.end();*/

var http = require('http');

http.createServer(function(req, res){
	var json = ""
		
		req.on('data', function(chunk){
			json += chunk
		});

		req.on('end', function(){
			var reqObj = JSON.parse(json)
		
		
			var resObj = {
				message: "hello" + reqObj.name,
				question: "Are you a good " + reqObj.occupation + "?"
			};
			
			res.writeHead(200);
			res.end(JSON.stringify(resObj));
		});
		
}).listen(8080);








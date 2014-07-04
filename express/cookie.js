/**
 * New node file
 */
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/',function(req, res){
	console.log(req.cookies);
	if(!req.cookies)
	{
		res.cookie('hasVisited','1',
				{maxAge:60*60*100, 
				 httpOnly: true, 
				 path: '/'});
	}
	
	res.send("Sending Cookie")
});

app.listen(8084);
console.log("Http server listenin gon port 8084");
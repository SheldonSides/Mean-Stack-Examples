/**
 * New node file
 */

//adding required model references
var express = require('express');
var app = express();
var url = require('url');
var bodyParser = require('body-parser');

//setting up body parser
app.use('/',bodyParser.urlencoded({
  extended: true
}));
app.use('/',bodyParser.json());


//setting up static file routes
app.use("/images",express.static('../images'),{maxAge:60*60*1000});
app.use('/',express.static('../static'),{maxAge:60*60*1000});

var options = {
		host: '127.0.0.1'
};


app.get("/",function(req, res){
	 res.send("Simple Express server");	
}); 


app.get("/login",function(req,res){
	res.send("Login Page");	
});

app.get("/login/:user",bodyParser(),function(req,res){
	var url_parts = url.parse(req.url,true);
	var query = url_parts.query;
	
	if(req.param("user") != undefined)
	{
		res.send(req.param("user") + " is on the Login Page");
	}
	else
	{
		res.send("No user data sent to login page");
	}
});

app.param("user",function(req,res,next,value){
	console.log(value + " logged into the log in page");
	next();
});

app.listen(8081);
console.log("listening on port 8081");




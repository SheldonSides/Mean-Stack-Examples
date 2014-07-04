/**
 * New node file
 */
var express = require('express');
var app = express();
var url = require('url')

var options = {
		host: '127.0.0.1'
};

app.listen(8083);
console.log("listening on port 8083");

app.get("/request/:user", function(req,res){
	log("url: " + req.originalUrl);
	log("Protocal: " +req.protocol);
	log("IP: " + req.ip);
	log("Path: " + req.path);
	log("Host " + req.host);
	log("Method " + req.method);
	log("Query " + JSON.stringify(req.query));
	log("Fresh " + req.refresh);
	log("Stale " + req.stale);
	log("Secure " + req.secure);
	log("Connection " + req.get('connection'));
	log("Headers " + JSON.stringify(req.headers,null,2));
	res.send("User Request");
	
	//res.status(500);
});

var json = {people : [{name: "Sheldon Sides", age: 33 , hobby: ["reading","programming"]}, {name: "Sara Sides", age: 41}]};

app.get("/json",function(req,res){
	app.set('json spaces', 4);	
	res.json(json);
});

app.get("/jsonp",function(req,res){
	app.set('json callback name','cb');	
	res.jsonp(json);
});

app.get("/image",function(req,res){
	res.sendfile('volcano.jpg',{root: '../images/'},function(err){
		if(err)
		{
			log("Error " + err);
		}
		else
		{
			log("Success");
		}
	});
});

app.get('/google',function(req,res){
	res.redirect('http://google.com');
});

app.get("/download", function(req,res){
	res.download("../images/","volcano.jpg",function(err){
		if(err)
		{
			log("Error downloading image" + err);
		}
		else
		{
			log("Downlaoding image Successfull");
		}
	});
});

function log(value)
{
	console.log(value);
}
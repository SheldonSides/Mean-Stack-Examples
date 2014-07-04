/**
 * New node file
 */
var express = require('express');
var basicAuth = require('basic-auth-connect');

var app = express();

var auth = basicAuth(function(user,pass){
	return (user === 'Sheldon' && pass === 'pass');
});

app.get("/library",function(req,res){
	res.send('Welcome to the unsecure Library page');
});

app.get('/restricted',auth, function(req,res){
	//res.status(401);
	res.send('Welcome to the secured Library page');	
});

app.listen(8085);
console.log("Listening on port 8085");
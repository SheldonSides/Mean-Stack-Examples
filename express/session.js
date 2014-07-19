/**
 * New node file
 */

var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var crypto = require('crypto');

function hashPW(pwd)
{
	return crypto.createHash('sha256').update(pwd).
			digest('base64').toString();
}

var app = express();
app.use(cookieParser('MAGICString'));
app.use(session());

app.use('/',express.static('../angular'),{maxAge:60*60*1000});

app.get('/restricted',function(req,res){	
	if(req.session.user)
	{
		res.send('<h2>' + req.session.success + '</h2>' +
				+ '<p>' + req.session.user + ' has entered the restricted section</p></br>' +
				' <a href="/logout">logout</a>');
	}
	else
	{
		req.session.error = 'Access Denied';
		res.redirect('/login');
	}		
});

app.get('/logout',function(req,res){
	req.session.destroy(function(){
		res.redirect('/login');
	});
});

app.get('/login',function(req,res){
	var response = '<form method="POST">' + 
		'User name: <input type="text" name="username" id="username" ><br/>'+
		'Password: <input type="text" name="pass" id="pass" ><br/>' +
		'<input type="submit" value="Submit" ></form>';
	
	if(req.session.user)
	{
		res.direct('/restricted');
	}
	else
	{
		response += "<h2>" + req.session.error + "</h2>";
	}
	
	res.type('html');
	res.send(response);
});

app.post('/login',function(req,res){
	var user = {username: "Sheldon" , pass:hashPW("pass")};
	
	if(user.pass === hashPW("pass"))
	{
		req.session.regenerate(function(){
			req.session.user = user.username;
			req.session.success = 'Authenticated as ' + user.username;
			res.redirect('/restricted');
		});
	}
	else
	{		
		req.session.regenerate(function(){		
			req.session.error = "Log in failed for check password or username";
			res.redirect('/login');
		});
	}
});

app.get('/',function(req,res){	
	res.send('Welcome to the session page');	
});

app.listen(8000);

console.log('server listening on port 8000');
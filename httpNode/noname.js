/**
 * New node file
 */
var dns = require('dns');

console.log("Resolving jtstechnology.com");

dns.resolve4('www.jtstechnology.com', function(err, addr){
	console.log('IPv4 \t' + JSON.stringify(addr, false,''));
	
	addr.forEach(function(a){
		dns.reverse(a, function(err, domains){
			console.log('Reverse for ' + a + ':' + JSON.stringify(domains));
		});
		
		dns.resolveMx('www.jtstechnology.com',function(err, domains){
			console.log(domains);
		});
	});
});
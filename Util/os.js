/**
 * New node file
 */
var os = require('os');

function log(value)
{
	console.log(value)
}

log("Temp Directory \t" + os.tmpdir());
log("Host name \t " + os.hostname());
log("Type \t" + os.type());
log("Platform \t" + os.platform());
log("Architecture \t" + os.arch());
log("Release \t" + os.release());
log("Uptime \t" + os.uptime());
log("CPUS \t\t" + JSON.stringify(os.cpus()));
log("Network Interface \t\t" + JSON.stringify(os.networkInterfaces()));
/* go to localhost:8080 or 127.0.0.1:8080 and add "/summer", or "/winter"
 or anything else to the end of the URL and it will be displayed in the window.*/

var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(req.url);
	res.end();
}).listen(8080);
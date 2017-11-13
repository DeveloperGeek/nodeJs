var http = require('http');
var port = 3000;
var server = http.createServer(function(request,response)
{
response.writeHead(200,{'content-Type': 'text/plain'});
response.end('nodeJS web server instance running...\n');
})

server.listen(port,function() {
console.log('Server running at http://localhost:3000/');
  });

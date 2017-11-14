var fs = require('fs');
var http = require('http');
var port = 3000;
var event = require('events');
const myEvent = new event.EventEmitter();

var server = http.createServer(function(request,response)
{

  fs.readFile('testFile.txt',function(err,data) {
  console.log('File has been read');
  myEvent.emit('read');
  });

  myEvent.on('read',function(data) {
  console.log('Finished file read and event emit');
  })

response.writeHead(200,{'content-Type': 'text/plain'});
response.end('nodeJS web server instance running...\n');
})

server.listen(port,function() {
console.log('Server running at http://localhost:3000/');
  });

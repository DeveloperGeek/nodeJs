var fs = require('fs');

// read file operation is Asyncronous

fs.readFile('testFile.txt',function(err,data) {

if(err) {
  console.log('Dany! Err happended during read file');
}
// This doesn't wait for readFile
// readFile executes after 4 sec
setTimeout(function () {
  console.log(data);
}, 4000);

});

console.log('Dany! read file operation ended');

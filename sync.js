var fileSys = require('fs');

var data = fileSys.readFileSync('testFile.txt');
console.log(data.toString());
console.log('Dany, End Read File');

const { DiffieHellmanGroup } = require('crypto');
const path = require('path');

//complete path
console.log('Complete path : ' + __filename);

//Base file name
console.log('Base file name: ' + path.basename(__filename));

//Directory name
console.log('Directory name: ' + path.dirname(__filename));

//File extension
console.log('File Extension: ' + path.extname(__filename))

//Create path object
console.log(path.parse(__filename))


//Concatenate paths
//../test/hello.html
// This puts the correct delimiter in, irrespective of Mac or Windows

console.log(path.join(__dirname, 'test', 'hello.html'));



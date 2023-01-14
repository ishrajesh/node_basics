 const fs = require('fs');
 const path = require('path');

//  //Create folder
//  fs.mkdir(path.join(__dirname, '/test'),{},err=> {
//     if(err) throw err;
//     console.log('Folder created');
//   });

 //Open and write to file
 fs.writeFile(path.join(__dirname, '/test', 'hello.txt') , 'Hello World!!', err=> {
    if(err) throw err;
    console.log('File has been created');
  });

 //Append to file
 fs.appendFile(path.join(__dirname, '/test', 'hello.txt') , '\nHa Ha Ha ', err=> {
    if(err) throw err;
    console.log('File has been appended');
  });
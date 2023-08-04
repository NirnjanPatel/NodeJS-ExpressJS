// Creating a folder using core modules
// creating a file 
// adding data
// without getting buffer data 
// file encoding
// rename file
// now delete both  file and folder

// CRUD or  CRUD Operation- create  update  read  delete

// fs.mkdirSync // Make  ("SyncronousVersion");
// // Folder Creation Method
// // Syncronous version 

// fs.writeFileSync(' SyncronousVersion/ AsyncronousFile.txt', "idfuuhdiudihfdli");

// var dt = fs.readFileSync(' SyncronousVersion/ AsyncronousFile.txt', "utf8");

// var data = dt.toString();
// console.log(data);

const fs = require("fs");


fs.renameSync("AsyncronousFileSystem.txt", "myBio.txt");
const data = fs.readFileSync("AsyncronousFileSystem.txt", "utf-8") // USe this for printing data without getting buffer datas 
// In string form also 
console.log(data);
fs.rmdirSync("SyncronousVersion");


// var fs = require('fs');

// fs.readFile('creatingFile.txt', 'utf8', function (err, data) {
//     if (err) throw err;
//     consle.log(data);
// });
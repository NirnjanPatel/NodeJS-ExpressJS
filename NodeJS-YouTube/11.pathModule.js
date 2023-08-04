// Get Details about file name and directory name  
// Path Modules
const path = require('path');

// Path Name
console.log(path.dirname('/home/administrator/Desktop/Abhi-Neer-main/NodeJS/NodeJS-YouTube/SyncronousVersion'));

// Extention Name
console.log(path.extname('/home/administrator/Desktop/Abhi-Neer-main/NodeJS/NodeJS-YouTube/Pathmodule.js'));

// Path Name(File Name)
console.log(path.basename('/home/administrator/Desktop/Abhi-Neer-main/NodeJS/NodeJS-YouTube/Pathmodule.js'));

// Full Path 

// console.log(path.parse('/home/administrator/Desktop/Abhi-Neer-main/NodeJS/NodeJS-YouTube/Pathmodule.js'));

// Call indivisually

const myPath1 = console.log(path.parse('/home/administrator/Desktop/Abhi-Neer-main/NodeJS/NodeJS-YouTube/Pathmodule.js'));

console.log("Root = " + myPath1.extname);
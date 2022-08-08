// const name = "Nirnjan";
// console.log(name);

const fs = require("fs"); // Stored this module in this variable 
// So we can use its pre-defined functions and methods 
fs.writeFileSync("read.txt", "Welcome ..!!"); // first order pass and wait and serve then take another order

fs.writeFileSync("createFile.txt", "Overloaded File"); // Overloading file

fs.appendFileSync('read.txt', "Overlaoded file means appending data in another line");

const buf_data = fs.readFileSync("read.txt"); // Read files data
// console.log(buf_data);

var org_Data = buf_data.toString;
console.log(org_Data);

fs.renameSync("read.txt", "readWrite.txt");
// Buffer used to store binary data

// <Buffer 57 65 6c 63 6f 6d 65 20 2e 2e 21 21 4f 76 65 72 6c 61 6f 64 65 64 20 66 69 6c 65 20 6d 65 61 6e 73 20 61 70 70 65 6e 64 69 6e 67 20 64 61 74 61 20 69 ... 14 more bytes >
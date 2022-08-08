// Creating Files using some Core Modules

const fs = require("fs");
fs.writeFileSync("creatingFile.txt", "Data Of this file");

fs.writeFileSync("creatingFile.txt", "Dataaaa Of this file");

fs.appendFileSync("creatingFile.txt", "Adding more data on this file");

fs.appendFileSync("creatingFile.txt", "Adding more data on this file");

var readFileData = fs.readFileSync("creatingFile.txt");

console.log(readFileData);

var dataToString = readFileData.toString();

console.log(dataToString);

fs.renameSync("creatingFile.txt", "creatingFiledfh.txt")
const { error } = require("console");
const fs = require("fs");

// // Asyncronous File creation
// fs.writeFile("fileName.txt", "Data of File", (argu) => {
//   console.log("Function invoked and file has been created");
//   console.log(argu);
// }); // Fat arrow function
// // Asyncronous appendFile
// fs.appendFile(
//   "fileName.txt",
//   "Appending Data",

//   (error) => {
//     console.log("Data has been appended");
//     console.log(error);
//   }
// );
// Asyncronous readFile
fs.readFile("fileName.txt", "utf-8", (error, data) => {
  console.log(data);
  console.log(error);
});

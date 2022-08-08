const fs = require("fs");
// // fs.writeFile("File.txt", "This is asyncronous :) ", (error) => {
// //   // Here use of callback is this that if file does not exist than create with this name and if it is exist than only add this sentence on them
// //   console.log("File is created ");
// //   console.log(error);
// // });
// // // Callback = means send function as an argument
// // // Invoked as the result of another function

// fs.appendFile("File.txt", "Data appended", "UTF-8", (err, data) => {
//   // To show output without Buffer Data
//   // err = parameter
//   console.log("Task Finished on Async...");
//   console.log(err); // Argument
//   console.log(data);
// });

// fs.writeFile("File.txt", "utf-8", (error, data) => {
//   console.log(data);
//   console.log(error);
// });

// fs.readFile("./AsyncFolder/File.txt", "utf-8", (data, err) => {
//   console.log(err);
//   console.log(data);
// });

// Renaming File
// fs.rename("./AsyncFolder/File.txt", "./AsyncFolder/FileRenamed.txt", (err) => {
//   console.log("Rename Done");
//   console.log(err);
// });

// Deleting File
// fs.unlink("./AsyncFolder/FileRenamed.txt", () => {
//   console.log("File has been unlinked");
// });

// Deleting Folder
fs.rmdir("./AsyncFolder", () => {
  console.log("Folder Deleted");
});

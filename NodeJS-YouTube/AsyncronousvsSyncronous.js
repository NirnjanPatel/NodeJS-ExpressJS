const fs = require("fs");
const { readFile } = require("fs/promises");
const fileData = fs.readFileSync("File.txt", "utf-8");
console.log(fileData);
// setTimeout(fileData, 3000);
console.log(fileData);
console.log("After the Data<br>");
console.log("After the Data"); // When this line will execute than it will go to next line

fs.readFile("File.txt", "utf-8", (errr, data) => {
  console.log(errr);

  console.log("After the Data<br>");
  console.log("After the Data<br>");
  console.log("After the Data<br>");
  console.log(() => {
    setTimeout(data, 5000);
  });
});
// It will not wait for procedural code execution
// It will execute

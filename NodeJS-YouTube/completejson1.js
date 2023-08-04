const fs = require("fs");
const bioData = {
  name: "Nirnjan",
  age: 20,
  coaching: "Universal Informatics",
};
const jsonData = JSON.stringify("JSON Data" + bioData);

// fs.writeFile("jsonAccess.json", jsonData, (err) => {
//   console.log("Done");
//   console.log(err);
// });

fs.readFile("jsonAccess.json", "utf-8", (err, data) => {
  console.log(err);
  console.log(data);
  console.log("!!!!----Done----!!!!");
  const orgData = JSON.parse(data);
  console.log("Original Data = " + orgData); //Object Data
});

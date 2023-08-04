// // #18: Complete JSON in Node JS
// // JSON = Lightweight format for transporting and storing data
// // Used when data is sent from a server to a web page

const fs = require("fs");
// // Creating a object
// const bioData = {
//   name: "Nirnjan",
//   age: 20,
//   coaching: "Universal Informatics",
// };
// const jsonData = JSON.stringify(bioData);
// // console.log(bioData);
// // console.log(bioData.name);

// console.log(jsonData);
// // console.log(jsonData.name); -> undefined
// // console.log(jsonData.age); -> undefined
// // console.log(jsonData.coaching); -> undefined

// const objectData = JSON.parse(jsonData);
// console.log(bioData);
// console.log("Name = " + bioData.name);
// console.log("Age = " + bioData.age);
// console.log("Coaching = " + bioData.coaching);

// 1. convert to JSON
// Using modules
// 2. Add to another File
// 3. Read that file
// 4. Again convert to Object

const bioData = {
  name: "Nirnjan",
  age: 20,
  coaching: "Universal Informatics",
};
const jsonData = JSON.stringify(bioData);

fs.writeFile("jsonAccess.json", jsonData, (err) => {
  console.log("Done");
  console.log(err);
});
fs.readFile("jsonAccess.json", "utf-8", (err, data) => {
  console.log(err);
  console.log(data);
  console.log("Done");
});

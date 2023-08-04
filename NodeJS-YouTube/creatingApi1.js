// Creating Server and routing and  creating API ans converting API

const http = require("http");
const fs = require("fs");
const url = require("url");
// const chalk = require("chalk");
// const nodemon = require("nodemon");
console.log(__dirname);
console.log(__filename);
const server = http.createServer((req, res) => {
  if (req.url == "/" || req.url == "home") {
    res.end("<h1>Home Page has been responsed</h1>");
  } else if (req.url == "/about") {
    // res.end("<h1>About Page has been responsed</h1>");
    fs.readFile(
      "/Users/pawanmalviya/Desktop/Abhi-Neer/22/23/creatingApi.json",
      (err, data) => {
        // res.end(data[0].name); Not accessible in json form
        // only accessible in object form like this
        const objectData = JSON.parse(data);
        res.end(objectData[0].name);
        console.log(data);
      }
    );
  } else if (req.url == "/contact") {
    // res.end("<h1>Contact Page has been responsed</h1>");
    fs.readFile(
      "/Users/pawanmalviya/Desktop/Abhi-Neer/22/23/creatingApi.json",
      (err, data) => {
        const objectData = JSON.parse(data);
        res.end(objectData[1].name);
      }
    );
  } else if (req.url == "/creatingApi") {
    // res.end("<h1>creatingApi Page has been responsed</h1>");
    res.writeHead(200, { "content-type": "application/json" });
    fs.readFile(
      "/Users/pawanmalviya/Desktop/Abhi-Neer/22/23/creatingApi.json",
      (err, data) => {
        res.end(data);
      }
    );
  } else {
    fs.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 page not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Requsted to server");
});
// fs.readFile(`${__dirname}/creatingApi.json`, (err, data) => {
//   res.end(data);
//   res.end(err);
// });

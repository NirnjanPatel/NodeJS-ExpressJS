const http = require("http");
const fs = require("fs");
const url = require("url");

// import url from "url";
console.log(__dirname);

console.log("Creating a web server");
const server = http.createServer((req, res) => {
  if (req.url == "/" || req.http == "/home") {
    res.end("<h1>Home Page has been responsed</h1>");
  } else if (req.url == "/about") {
    res.end("<h1>About Page has been responsed</h1>");
  } else if (req.url == "/contact") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("<h1>Contact Page has been responsed</h1>");
    // res.write("<h1>Contact Page has been responsed</h1>");
  } else if (req.url == "/creatingApi") {
    // res.end("<h1>creatingApi Page has been responsed</h1>");
    // fs.readFile(`${__dirname}/creatingApi.json`, "utf-8", (err, data) => {
    //   console.log(data);
    //   console.log(err);
    //   res.end(data);
    // });
    fs.readFile(
      "/Users/pawanmalviya/Desktop/Abhi-Neer/22/23/creatingApi.json",
      "utf-8",
      (err, data) => {
        // console.log(data);
        // console.log(err);
        // res.end(data);
        const objData = JSON.parse(data);
        // res.end(objData[0].name);
        // res.end(objData[1].name); // Targeting indivisual keys and their valuses
        res.end(objData[1].username);
      }
    );
  } else {
    res.writeHead(404, { "Content-type": "text/html" }); // Needed for server
    // every details about our url and request and response will be stored in network
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 Page Not Found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Requsted to server");
});

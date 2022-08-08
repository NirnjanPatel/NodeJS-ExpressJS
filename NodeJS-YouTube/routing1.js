// Routing on nodejs (server) Practice
// Server creating
//  Node JS Routing | Handled HTTP Requests in Node.JS
const http = require("http");
const url = require("url");
// import url from "url";
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
  } else {
    res.writeHead(404, { "Content-type": "text/html" }); // Needed for server
    // every details about our url and request and response will be stored in network
    res.end("<h1>404 Page Not Found</h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("Requsted to server");
});

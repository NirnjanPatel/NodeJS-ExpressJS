// Routing in nodejs
// on port / server creating a new page

// Creating Web Server
const http = require("http");
const url = require("url");
// ((function (require, exports, __dirname, __filename)) => {

// });
const server = http.createServer((req, res) => {
  //   console.log(req.url);
  if (req.url == "/") {
    res.end("<h1>Server Responsed from Home Page</h1>");
  } else {
    if (req.url == "/about") {
      res.end("<h1>Server Responsed from About Page</h1>");
    } else {
      if (req.url == "/contact") {
        res.end("<h1>Server Responsed from contact Page</h1>");
      } else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h1>404 page not found</h1>");
      }
    }
  }
  //       else {
  //       res.end("404 page not found");
  //   }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Requested to server");
});

// Fab icon = title bar icon

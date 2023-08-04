// Creating Web Server
const http = require("http");
// ((function (require, exports, __dirname, __filename)) => {

// });
const server = http.createServer((req, res) => {
  res.end("Server Responsed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Requested to server");
});

// Creating our own Web Server
// Website or web server = page accessing
// http requests handling

// php = jam
// apche = iis web server
// nodejs = no need third party server
// nodejs can create own web server asynchronously

// needed a core module for creating web server
// req = request // to search engine
// res = response // from server

const http = require("http"); // this module
const server = http.createServer((req, res) => {
  res.end("Response from server"); // response
});

// // request
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to the port number 8000");
});

// 127.0.0.1 = ip address // 8000 - port name

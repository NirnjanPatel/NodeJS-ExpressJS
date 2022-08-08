const http = require('http');
const server = http.createServer();
const fs = require("fs");

// First trick = loaded full at a time is not streaming 
server.on("request", (req, res) => {
    const fs = require("fs");
    fs.readFile("./File.txt", (err, data) => {
        if (err) return console.error(err);
        res.end(data.toString());
    });
});

// Streaming Trick
const rstream = fs.createReadStream('./File.txt');
rstream.on('data', (chunkdata) => {
    res.write(chunkdata);
});

server.listen(8000, "127.0.0.1");

// Work of a server The task of a web server is to open a file on the server and return the content to the client.



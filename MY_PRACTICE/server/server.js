const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    const log = `${new Date()} - ${req.method} - ${req.url}\n`;

    fs.appendFile("log.txt", log, (err) => {
        if (err) console.log(err);
    });

    res.end("helo world");
});

server.listen(3303);

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;

  // HOME ROUTE
  if (req.method === "GET" && pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Notes API");
  }

  // GET NOTES (ALL OR SINGLE)
  else if (req.method === "GET" && pathname === "/notes") {

    const id = url.searchParams.get("id");

    fs.readFile("notes.json", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end("Error reading notes");
      }

      const notes = JSON.parse(data);

      if (id) {
        const note = notes.find(n => n.id == id);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(note || {}));
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(notes));
      }
    });
  }

  // POST NOTES
  else if (req.method === "POST" && pathname === "/notes") {

    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {

      const newNote = JSON.parse(body);

      fs.readFile("notes.json", "utf8", (err, data) => {
        if (err) {
          res.writeHead(500);
          return res.end("Error reading file");
        }

        const notes = JSON.parse(data);
        notes.push(newNote);

        fs.writeFile("notes.json", JSON.stringify(notes), () => {
          res.writeHead(201, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "Note added" }));
        });
      });
    });
  }

  // NOT FOUND
  else {
    res.writeHead(404);
    res.end("Route not found");
  }

});

server.listen(3060, () => {
  console.log("Server running on http://localhost:3060");
});

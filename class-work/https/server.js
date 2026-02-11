const http =require("http");
const PORT = 5794;
const server = http.createServer((req, res) => {  
  const method = req.method;
  const url = req.url;


 res.end("hello world");
 });


server.listen(PORT,() => {console.log(`Server is running on http://localhost:${PORT}`);
});
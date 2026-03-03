const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {

    // GET Request
    if (req.method === 'GET' && req.url === '/') {

        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.end(`
            <h2>Enter Your Name</h2>
            <form method="POST" action="/submit">
                <input type="text" name="username" />
                <button type="submit">Submit</button>
            </form>
        `);
    }

    // POST Request
    else if (req.method === 'POST' && req.url === '/submit') {

        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const parsedData = querystring.parse(body);
            const name = parsedData.username;

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`<h1>Hello ${name}</h1>`);
        });
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found');
    }

});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
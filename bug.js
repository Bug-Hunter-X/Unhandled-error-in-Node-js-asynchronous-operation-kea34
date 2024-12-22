const http = require('http');

const server = http.createServer((req, res) => {
  // Handle the request here.  This is an example, and it may not handle all the cases
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Not Found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// Unexpected error handling
// A common mistake in Node.js is how to handle errors in asynchronous operations.
// The following code does not handle errors correctly.

http.get('http://example.com', (res) => {
  console.log('statusCode:', res.statusCode);
}).on('error', (err) => {
  console.error('Error:', err.message);
});
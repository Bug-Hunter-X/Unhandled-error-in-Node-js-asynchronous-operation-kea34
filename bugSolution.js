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

// Improved error handling
http.get('http://example.com', (res) => {
  console.log('statusCode:', res.statusCode);
}).on('error', (err) => {
  console.error('Error:', err.message); // Handle the error
  // Add more robust error handling here, such as logging to a file or notifying a monitoring service
});
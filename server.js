const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/ping') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Pong\n');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found\n');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Ping-Pong server running at http://localhost:${PORT}/ping`);
});

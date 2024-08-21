const http = require('http');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  // Set the response header content type to plain text
  res.setHeader('Content-Type', 'text/plain');
  // Send the response body
  res.end('Hello Holberton School!');
});

const port = 1245;
const host = '127.0.0.1';
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

module.exports = app;

http = require('http');

const app = http.createServer((req, res) => {
  // Set the response header content type to plain text
  res.setHeader('Content-Type', 'text/plain');
  // Send the response body
  res.end('Hello Holberton School!');
});

app.listen(1245);
module.exports = app

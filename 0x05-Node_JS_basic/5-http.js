const http = require('http');
const { readDBAsync, getStudentsInfo, csvToJSON } = require('./3-read_file_async');

const path = process.argv.length > 2 ? process.argv[2] : '';

async function countStudents(path) {
  const data = await readDBAsync(path);
  const studentsData = JSON.parse(csvToJSON(data));

  return (`Number of students: ${studentsData.length}
${getStudentsInfo(studentsData, 'CS')}
${getStudentsInfo(studentsData, 'SWE')}`);
}

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const data = await countStudents(path);
      res.end(`This is the list of our students\n${data}`);
    } catch (err) {
      res.statusCode = 500;
      res.end(err.message);
    }
  } else {
    res.statusCode = 404;
    res.end('Not foud');
  }
});

const port = 1245;
const host = '127.0.0.1';
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

module.exports = app;

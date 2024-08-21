const express = require('express');
const { readDBAsync, getStudentsInfo, csvToJSON } = require('./utils');

const app = express();
const path = process.argv.length > 2 ? process.argv[2] : '';

async function countStudents(path) {
  const data = await readDBAsync(path);
  const studentsData = JSON.parse(csvToJSON(data));

  return (`Number of students: ${studentsData.length}
${getStudentsInfo(studentsData, 'CS')}
${getStudentsInfo(studentsData, 'SWE')}`);
}

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  const prompt = 'This is the list of our students\n';
  try {
    const data = await countStudents(path);
    res.send(prompt + data);
  } catch (err) {
    res.statusCode = 500;
    res.send(prompt + err.message);
  }
});

const port = 1245;
const host = '127.0.0.1';
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

module.exports = app;

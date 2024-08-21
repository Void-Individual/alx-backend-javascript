http = require('http');

const path = process.argv.length > 2 ? process.argv[2] : '';
async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.split('\n');
    const fields = {};
    let count = 0;
    for (const line of lines.slice(1)) {
      if (line.length > 0) {
        count += 1;
        const row = line.split(',');

        if (!(row[3] in fields)) {
          fields[row[3]] = [1, [row[0]]];
        } else {
          fields[row[3]][0] += 1;
          fields[row[3]][1].push(row[0]);
        }
      }
    }
    console.log('Number of students:', count);
    Object.keys(fields).forEach((key) => {
      process.stdout.write(`Number of students in ${key}: ${fields[key][0]} `);
      process.stdout.write(`List: ${fields[key][1].join(', ')}\n`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    // Set the response header content type to plain text
    res.setHeader('Content-Type', 'text/plain');
    // Send the response body
    res.end('Hello Holberton School!');
  } else if ( req.url === '/students') {
    // Set the response header content type to plain text
    res.setHeader('Content-Type', 'text/plain');
    try {
      const data = await countStudents(path);
      // Send the response body
      res.end(`This is the list of our students\n${data}`);
    } catch (err) {
      res.end(err.message)
    }
  } else {
    res.end()
  }
});

app.listen(1245);

module.exports = app

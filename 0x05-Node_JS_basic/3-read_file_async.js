const fs = require('fs').promises;

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
      const count = fields[key][0];
      process.stdout.write(`Number of students in ${key}: ${count}. `);
      process.stdout.write(`List: ${fields[key][1].join(', ')}\n`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

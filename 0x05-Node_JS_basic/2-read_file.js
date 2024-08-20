const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n');
    const fields = {};
    let count = 0;
    for (let x = 1; x < lines.length; x += 1) {
      if (lines[x].length > 0) {
        count += 1;
        const row = lines[x].split(',');

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
};

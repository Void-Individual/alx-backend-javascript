const { readDBAsync, getStudentsInfo, csvToJSON } = require('./utils');

async function countStudents(path) {
  const data = await readDBAsync(path);
  const studentsData = JSON.parse(csvToJSON(data));

  console.log(`Number of students: ${studentsData.length}`);

  console.log(getStudentsInfo(studentsData, 'CS'));
  console.log(getStudentsInfo(studentsData, 'SWE'));
}

module.exports = countStudents;

// module.exports = async function countStudents(path) {
//  try {
//    const data = await fs.readFile(path, 'utf-8');
//    const lines = data.split('\n');
//    const fields = {};
//    let count = 0;
//    for (const line of lines.slice(1)) {
//      if (line.length > 0) {
//        count += 1;
//        const row = line.split(',');

//        if (!(row[3] in fields)) {
//          fields[row[3]] = [1, [row[0]]];
//        } else {
//          fields[row[3]][0] += 1;
//          fields[row[3]][1].push(row[0]);
//        }
//      }
//    }
//    console.log('Number of students:', count);
//    Object.keys(fields).forEach((key) => {
//      process.stdout.write(`Number of students in ${key}: ${fields[key][0]} `);
//      process.stdout.write(`List: ${fields[key][1].join(', ')}\n`);
//    });
//  } catch (err) {
//    throw new Error('Cannot load the database');
//  }
// }

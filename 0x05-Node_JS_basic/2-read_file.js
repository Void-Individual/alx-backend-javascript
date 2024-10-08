const { readDBSync, getStudentsInfo, csvToJSON } = require('./utils');

module.exports = function countStudents(path) {
  const data = readDBSync(path);
  const studentsData = JSON.parse(csvToJSON(data));
  console.log(`Number of students: ${studentsData.length}`);

  console.log(getStudentsInfo(studentsData, 'CS'));
  console.log(getStudentsInfo(studentsData, 'SWE'));
};

// module.exports = function countStudents(path) {
//  if (!fs.existsSync(path)) {
//    throw new Error('Cannot load the database');
//  }
//  if (!fs.statSync(path).isFile()) {
//    throw new Error('Cannot load the database');
//  }

//  const lines = fs
//    .readFileSync(path, 'utf-8')
//    .toString('utf-8')
//    .trim()
//    .split('\n');
//  const fields = {};
//  let count = 0;
//  for (let x = 1; x < lines.length; x += 1) {
//    if (lines[x].length > 0) {
//      count += 1;
//      const row = lines[x].split(',');

//      if (!(row[3] in fields)) {
//        fields[row[3]] = [1, [row[0]]];
//      } else {
//        fields[row[3]][0] += 1;
//        fields[row[3]][1].push(row[0]);
//      }
//    }
//  }
//  console.log('Number of students:', count);
//  Object.keys(fields).forEach((key) => {
//    process.stdout.write(`Number of students in ${key}: ${fields[key][0]} `);
//    process.stdout.write(`List: ${fields[key][1].join(', ')}\n`);
//  });
// };

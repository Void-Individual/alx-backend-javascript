export default function createIteratorObject(report) {
  const employees = [];
  const { allEmployees } = report;

  for (const dept of Object.keys(allEmployees)) {
    for (const employee of allEmployees[dept]) {
      employees.push(employee);
    }
  }

  return employees;
}

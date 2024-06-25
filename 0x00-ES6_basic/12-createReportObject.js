export default function createReportObject(employeesList) {
  const all = {
    allEmployees: employeesList,
    getNumberOfDepartments: () => employeesList.length};
  return all;
}

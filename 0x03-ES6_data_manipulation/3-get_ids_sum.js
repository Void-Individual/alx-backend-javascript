export default function getStudentIdsSum(arr) {
  if (!Array.isArray(arr)) {
    return 0;
  }
  const sums = arr.reduce((sum, student) => sum + student.id, 0);
  return sums;
}

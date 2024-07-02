export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCIty = students.filter((id) => id.location === city);

  const updatedStudents = studentsInCIty.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: gradeObj ? gradeObj.grade : 'N/A',
    };
  });
  return updatedStudents;
}

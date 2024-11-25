export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsWithcity = students.filter((student) => student.location === city);
  const updateList = studentsWithcity.map((student) => {
    const gradeList = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: gradeList ? gradeList.grade : 'N/A',
    };
  });
  return updateList;
}

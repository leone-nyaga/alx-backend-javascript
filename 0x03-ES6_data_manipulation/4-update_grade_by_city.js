export default function updateStudentGradeByCity(students, city, newGrade) {
  // checking if students is an array
  if (!Array.isArray(students)) {
    return [];
  }

  const defaultGrade = { grade: 'N/A' };
  // filtering students by city and map to update grade
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const matchGrade = newGrade.find((grade) => grade.studentId === student.id);
      const grade = matchGrade ? matchGrade.grade : defaultGrade.grade;

      // use object destructuring to extract needed properties
      const { id, firstName, location } = student;
      return {
        id, firstName, location, grade,
      };
    });
}

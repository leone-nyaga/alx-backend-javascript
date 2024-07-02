export default function getStudentsByLocation(students, City) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.filter((student) => student.location === City);
}

import getListStudents from './0-get_list_students';

export default function getListStudentIds(object) {
  if (!(object instanceof Array)) {
    return [];
  }

  const students = getListStudents();
  return students.map((student) => student.id);
}

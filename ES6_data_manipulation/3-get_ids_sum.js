import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(students) {
  const listIds = getListStudentIds(students);
  return listIds.reduce((accmulator, currentValue) => accmulator + currentValue, 0);
}

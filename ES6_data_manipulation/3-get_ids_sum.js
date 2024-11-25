import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(students) {
  const listIds = getListStudentIds(students);
  const initialValue = 0;
  const result = listIds.reduce((accmulator, currenntValue) => accmulator + currenntValue,
    initialValue);
  return result;
}

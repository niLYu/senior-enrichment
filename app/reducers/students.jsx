import axios from 'axios';

/* ---------------- ACTIONS ----------------- */

const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT_BY_ID = 'GET_STUDENT_BY_ID'
const DELETE_STUDENT = 'DELETE_STUDENT';

/* ---------------- ACTION CREATORS ----------------- */

function getStudents (students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}

function getStudent (student) {
  const action = { type: GET_STUDENT_BY_ID, student };
  return action;
}

function deleteStudent (student) {
  const action = { type: DELETE_STUDENT, student};
  return action;
}

/* ------------------- THUNK CREATORS ------------- */

export function fetchStudents () {
  return function thunk (dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students);
        dispatch(action)
    });
  }
}

export function fetchStudent (id) {
  return function thunk (dispatch) {
    return axios.get(`/api/students/${id}`)
      .then(res => res.data)
      .then(student => {
        const action = getStudent(student);
        dispatch(action)
    });
  }
}

export function removeStudent (id) {
  return function thunk (dispatch) {
    return axios.delete(`/api/students/${id}`)
    .then(() => dispatch(deleteStudent(id)))
  }
}

//REDUCER

export default function reducer (state = [], action) {

  switch (action.type) {

    case GET_STUDENTS:
      return action.students;

    case GET_STUDENT_BY_ID:
      return action.student;

    case DELETE_STUDENT:
      return action.student

    default:
      return state;
  }
}

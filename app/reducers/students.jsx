import axios from 'axios';

/* ---------------- ACTIONS ----------------- */

const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT_BY_ID = 'GET_STUDENT_BY_ID'

/* ---------------- ACTION CREATORS ----------------- */

function getStudents (students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}

function getStudent (student) {
  const action = { type: GET_STUDENT_BY_ID, student };
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

//REDUCER

export default function reducer (state = [], action) {

  switch (action.type) {

    case GET_STUDENTS:
      return action.students;

    case GET_STUDENT_BY_ID:
      return action.student;

    default:
      return state;
  }
}

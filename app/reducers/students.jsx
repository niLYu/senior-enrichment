import axios from 'axios';

/* ---------------- ACTIONS ----------------- */

const GET_STUDENTS = 'GET_STUDENTS';

/* ---------------- ACTION CREATORS ----------------- */

export function getStudents (students) {
  const action = { type: GET_STUDENTS, students };
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

//REDUCER

export default function reducer (state = [], action) {

  switch (action.type) {

    case GET_STUDENTS:
      return action.students;

    default:
      return state;
  }
}

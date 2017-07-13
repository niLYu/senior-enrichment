import axios from 'axios';

/* ---------------- ACTIONS ----------------- */

const GET_STUDENT_BY_ID = 'GET_STUDENT_BY_ID';

/* ---------------- ACTION CREATORS ----------------- */

export function getStudent (student) {
  const action = { type: GET_STUDENT_BY_ID, student };
  return action;
}

/* ------------------- THUNK CREATORS ------------- */

export function fetchStudent (studentId) {
  return function thunk (dispatch) {
    return axios.get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => {
        const action = getStudent(student);
        dispatch(action)
    });
  }
}

//REDUCER

export default function reducer (state = '', action) {

  switch (action.type) {

    case GET_STUDENT_BY_ID:
      return action.student;

    default:
      return state;
  }
}

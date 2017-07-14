import axios from 'axios';

/* ---------------- ACTIONS ----------------- */

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS_BY_ID = 'GET_CAMPUS_BY_ID';

/* ---------------- ACTION CREATORS ----------------- */

function getCampuses (campuses) {
  const action = { type: GET_CAMPUSES, campuses};
  return action;
}

function getCampus (campus) {
  const action = { type: GET_CAMPUS_BY_ID, campus};
  return action;
}

/* ------------------- THUNK CREATORS ------------- */

export function fetchCampuses () {

  return function thunk (dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then( campuses => {
        const action = getCampuses(campuses);
        dispatch(action)
    });
  }
}

export function fetchCampus (campusId) {

  return function thunk (dispatch) {
    return axios.get(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then( campus => {
        const action = getCampuses(campus);
        dispatch(action)
    });
  }
}

// REDUCER

export default function reducer (state = [], action) {

  switch (action.type) {

    case GET_CAMPUSES:
      return action.campuses;

    case GET_CAMPUS_BY_ID:
      return action.campus;

    default:
      return state;
  }
}


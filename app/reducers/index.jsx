import { combineReducers } from 'redux'
import campuses from './campuses';
import students from './students';
import student from './student';

// const initialState = {}

// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };

export default combineReducers({ campuses, students, student })

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function studentList(props) {
  console.log(props);
  const listOfStudents = props.allStudents.students;
  return (
    <div className='listOfStudents'>
      <h2>List of Students</h2>
        <ul>
            {listOfStudents && listOfStudents.map( student => {
              return (
                <li className='student' key={student.id}>
                  {student.name}
                </li>
              )
            })}
       </ul>
    </div>
  )
}

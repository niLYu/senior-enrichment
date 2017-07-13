import React from 'react';
import { connect } from 'react-redux';

function Student(props) {

  const urlId = +props.history.location.pathname.slice(10);
  const studentsArr = props.students.students;

  const filteredStudent = studentsArr
    ? studentsArr.filter(student => {
        return student.id === urlId;})
    : 'No students';

  return (
    <div>
       <h3>{filteredStudent[0].name}</h3>
    </div>
  )

}

const mapStateToProps = function (state) {
  return {
    students: state.students
  };
}

export default connect(mapStateToProps)(Student);

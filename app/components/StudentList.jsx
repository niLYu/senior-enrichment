import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStudents } from '../reducers/students';

class StudentList extends Component {

  componentDidMount() {
    this.props.fetchStudents();
  }

  render() {
    const listOfStudents = this.props.students;

    return (
      <div className="listOfStudents">
        <h1>Students</h1>
        <ul>
          {Array.isArray(listOfStudents) && listOfStudents.map(student => {
            return (
              <li className='student' key={student.id}>
                <NavLink to={`/students/${student.id}`}>
                  {student.name}
                </NavLink>
              </li>
            )
          })}
        </ul>
       <NavLink to={`/students/addstudent`}>
          <button
            type="button"
            value=''>
            Add a student
        </button>
        </NavLink>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    students: state.students
  };
}

const mapDispatchToProps = { fetchStudents }

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);

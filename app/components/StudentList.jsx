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
        <h2>List of Students</h2>
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
        <div>
          <button
            onClick={this.addStudent}
            type="button">
            </button>
        </div>
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

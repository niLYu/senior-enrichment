import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchStudent, fetchStudents, removeStudent } from '../reducers/students';

class Student extends Component {
  constructor(props) {
    super(props);
    this.clickDelete = this.clickDelete.bind(this);
  }

  componentDidMount() {
    const urlId = +this.props.history.location.pathname.slice(10);
    this.props.fetchStudent(urlId);
  }

  clickDelete(event) {
    this.props.removeStudent(event.target.value)
    this.props.history.push('/students');
  }

  render() {

    const studentById = this.props.student;

    return (
      <div>
        {studentById &&
          <div>
            <h2 className='studentName'>{studentById.name}</h2>
            <h2 className='email'>{studentById.email}</h2>
            {studentById.campus &&
              <NavLink to={`/campuses/${studentById.campus.id}`}>
                <h2 className='studentCampus'>{studentById.campus.name}</h2>
              </NavLink >
            }
            <div >
              <button
                onClick={this.clickDelete}
                type="button"
                value={studentById.id}>
                DELETE
                </button>
            </div>
          </div>}
      </div>

    )
  }
}

const mapStateToProps = function (state) {
  return {
    student: state.students
  };
}

const mapDispatchToProps = { fetchStudent, fetchStudents, removeStudent };

export default connect(mapStateToProps, mapDispatchToProps)(Student);

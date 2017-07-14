import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudent } from '../reducers/students';
import { fetchCampus } from '../reducers/campuses';


class Student extends Component {
  componentDidMount() {
    const urlId = +this.props.history.location.pathname.slice(10);
    this.props.fetchStudent(urlId);
  }

  render() {
    const studentById = this.props.student;
    // if(studentById.length) {
    // this.props.fetchCampus(studentById.id)
    // }

    console.log(this.props);

    return (
      <div>
         {studentById &&
          <div>
            <h2 className='studentName'>{studentById.name}</h2>
            <h2 className='email'>{studentById.email}</h2>
            <h2 className='studentCampus'>{studentById.id}</h2>
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

const mapDispatchToProps = { fetchStudent, fetchCampus };

export default connect(mapStateToProps, mapDispatchToProps)(Student);

import React from 'react';
import { connect } from 'react-redux';
import CampusList from './CampusList';
import StudentList from './StudentList';

function Home (props) {
  return (
    <div className="home">
      <CampusList allCampuses={props.campuses} />
      <StudentList allStudents={props.students} />
    </div>
  )
}

const mapStateToProps = function (state) {
  return {
    campuses: state.campuses,
    students: state.students
  };
};

export default connect(mapStateToProps)(Home);


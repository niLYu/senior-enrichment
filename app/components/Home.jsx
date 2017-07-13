import React from 'react';
import { connect } from 'react-redux';
import CampusList from './CampusList';
function Home (props) {

  return (
    <div className="home">
      <CampusList allCampuses={props.campuses}/>
    </div>
  )
}

const mapStateToProps = function (state, ownProps) {
  return {
    campuses: state.campuses
  };
};

export default connect(mapStateToProps)(Home);


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampus } from '../reducers/campuses';

class Campus extends Component {

  componentDidMount() {
    const urlId = +this.props.history.location.pathname.slice(10);
    this.props.fetchCampus(urlId);
  }

  render() {
    const campusById = this.props.campus;
    return (
      <div>
         {campusById &&
          <div>
            <h2 className='studentName'>{campusById.name}</h2>
            <h2 className='email'>{campusById.email}</h2>
            <h2 className='studentCampus'>{campusById.campusId}</h2>
          </div>}
      </div>

    )
  }
}

const mapStateToProps = function (state) {
  return {
    campus: state.campuses
  };
}

const mapDispatchToProps = { fetchCampus };

export default connect(mapStateToProps, mapDispatchToProps)(Campus);

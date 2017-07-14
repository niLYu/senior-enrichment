import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCampus } from '../reducers/campuses';

class Campus extends Component {

  componentDidMount() {
    const urlId = +this.props.history.location.pathname.slice(10);
    this.props.fetchCampus(urlId);
  }

   click (event) {
    this.props.removeCampus(event.target.value)
    this.props.fetchCampus()
    this.props.history.push('/campuses');
  }

  render() {
    console.log(this.props)
    const campusById = this.props.campus;
    return (
      <div>
         {campusById &&
          <div>
            <h2 className='campusName'>{campusById.name}</h2>
            {Array.isArray(campusById.students) &&
              campusById.students.map( student => {
                return (
                <li key={student.id}>
                  <NavLink to={`/students/${student.id}`}>
                    {student.name}
                  </NavLink>
                </li>
                )
            })}
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

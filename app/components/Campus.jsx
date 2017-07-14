import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCampus, removeCampus } from '../reducers/campuses';

class Campus extends Component {
  constructor(props) {
    super(props);
    this.clickDelete = this.clickDelete.bind(this);
  }

  componentDidMount() {
    const urlId = +this.props.history.location.pathname.slice(10);
    this.props.fetchCampus(urlId);
  }

  clickDelete(event) {
    event.preventDefault();
    this.props.removeCampus(event.target.value)
    this.props.history.push('/campuses');
  }

  render() {
    const campusById = this.props.campus;
    return (
      <div className='center'>
        {campusById &&
          <div>
            <h2 className='campusName'>{campusById.name}</h2>
            {Array.isArray(campusById.students) &&
              campusById.students.map(student => {
                return (
                  <li key={student.id}>
                    <NavLink to={`/students/${student.id}`}>
                      {student.name}
                    </NavLink>
                  </li>
                )
              })
            }
            <div >
              <button
                onClick={this.clickDelete}
                type="button"
                value={campusById.id}>
                DELETE THIS CAMPUS
                </button>
            </div>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    campus: state.campuses
  };
}

const mapDispatchToProps = { fetchCampus, removeCampus };

export default connect(mapStateToProps, mapDispatchToProps)(Campus);

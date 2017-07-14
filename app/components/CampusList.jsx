import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers/campuses';

class CampusList extends Component {

  componentDidMount() {
    this.props.fetchCampuses();
  }

  render() {

    const listOfCampuses = this.props.campuses;
    console.log(listOfCampuses)
    return (
      <div className="listOfCampuses">
        <h1>List of Campuses</h1>
        <ul>
          {Array.isArray(listOfCampuses) && listOfCampuses.map(campus => {
            return (
              <li key={campus.id}>
                <NavLink to={`/campuses/${campus.id}`}>
                  {campus.name}
                </NavLink>
              </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    campuses: state.campuses
  };
};

const mapDispatchToProps = {fetchCampuses}

export default connect(mapStateToProps, mapDispatchToProps)(CampusList);

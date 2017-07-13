import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers/campuses'

class CampusList extends Component {
  constructor(props) {
    super(props);

    this.state = {campuses: []};
  }

  componentDidMount() {
    this.props.fetchCampuses();
  }

  render() {

    const listOfCampuses = this.props.campuses.campuses;

    return (
      <div className="listOfCampuses">
        <h1>List of Campuses</h1>
        <ul>
          {listOfCampuses && listOfCampuses.map(campus => {
            return (
              <li key={campus.id}>
                <NavLink to={`/campuses/${campus.name}`}>
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
    campuses: state.campuses,
  };
};

const mapDispatchToProps = {fetchCampuses}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampusList);

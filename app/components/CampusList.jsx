import React from 'react';
import { NavLink } from 'react-router-dom';

export default function campusList(props) {
  const listOfCampuses = props.allCampuses.campuses;
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


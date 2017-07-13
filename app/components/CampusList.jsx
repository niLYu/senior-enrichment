import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function campusList (props) {
  const listOfCampuses = props.allCampuses.campuses
    return (
      <div className="listOfCampuses">
        <h1>List of Campuses</h1>
        <ul>
          {listOfCampuses && listOfCampuses.map(campus => {
            return (
              <li key={campus.id}>{campus.name}</li>
            )})
          }
        </ul>
      </div>
    )
}


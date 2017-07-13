import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import store from '../store';
import Navbar from './Navbar';
import { fetchCampuses } from '../reducers/campuses';
import { fetchStudents } from '../reducers/students';

export default class Root extends Component {

  componentDidMount() {
    const campusesThunk = fetchCampuses();
    const studentsThunk = fetchStudents();
    store.dispatch(campusesThunk);
    store.dispatch(studentsThunk);
  }

  render() {
    return (
      <div>

        <Router>
          <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route component ={Home} />
          </Switch>
          </div>
        </Router>
      </div>
    )
  }
}


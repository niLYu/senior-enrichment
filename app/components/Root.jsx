import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Campuses from './CampusList';
import Students from './StudentList';

export default function Root() {

  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/campuses" component={Campuses} />
            <Route path="/students" component={Students} />
            <Route component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  )

}


import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Campuses from './CampusList';
import Campus from './Campus';
import AddCampus from './AddCampus';
import Students from './StudentList';
import Student from './Student';


export default function Root() {

  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/campuses" component={Campuses} />
            <Route path ="/campuses/add" component={AddCampus} />
            <Route exact path="/students" component={Students} />
            <Route path="/campuses/:id" component={Campus} />
            <Route path="/students/:id" component={Student} />
            <Route component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  )

}


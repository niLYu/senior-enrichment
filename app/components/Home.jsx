import React from 'react';
import { connect } from 'react-redux';
import CampusList from './CampusList';
import StudentList from './StudentList';

export default function Home () {
  return (
    <div className="home">
      <CampusList />
      <StudentList />
    </div>
  )
}

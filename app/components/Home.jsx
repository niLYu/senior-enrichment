import React from 'react';
import CampusList from './CampusList';
import StudentList from './StudentList';

export default function Home () {
  return (
    <div className="home center">
      <CampusList />
      <StudentList />
    </div>
  )
}

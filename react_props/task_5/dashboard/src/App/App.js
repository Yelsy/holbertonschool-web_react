import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Login } from '../Login/Login';
import { Notifications } from '../Notifications/Notifications.js';
import { CourseList } from '../CourseList/CourseList';
import PropTypes from 'prop-types';

const App = ({ isLoggedIn }) => {
  const listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];
  const listNotifications = [
    {
      id: 1,
      html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" },
      type: "urgent",
      value: "urgent",
    },
  ];
  return (
    <>
     <>
      <Notifications displayDrawer listNotifications={listNotifications} />
      <Header />
      {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
      <Footer />
    </>
    </> 
    
  )
}
App.defaultProps = {
  isLoggedIn: false,
};
App.propTypes = {
  isLoggedIn: PropTypes.bool,
};
export default App;

import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Login } from '../Login/Login';
import { Notifications } from '../Notifications/Notifications.js';
import { CourseList } from '../CourseList/CourseList';
import PropTypes from 'prop-types';

const App = ({ isLoggedIn }) => {
  return (
    <>
     <Notifications />
      <Header />
      {isLoggedIn ? <CourseList /> : <Login />}
      <Footer />
    </> 
    
  )
}
App.defaultProps = {
  isLoggedIn: false,
};
export default App;

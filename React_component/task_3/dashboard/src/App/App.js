import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Login } from "../Login/Login";
import { Notifications } from "../Notifications/Notifications.js";
import { CourseList } from "../CourseList/CourseList";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";
import BodySection from '../BodySection/BodySection';

class App extends Component {

  handleKeyDown = (e) => {
    //when press control and the h simultaneosly display a message
    if(e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  componentDidMount() {
    // Attach event listener when the component is mounted
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    // Remove event listener when the component is unmounted
    document.removeEventListener('keydown', this.handleKeyDown);
  }
  
  render() {
    const { isLoggedIn } = this.props;
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];
    const listNotifications = [
      {
        id: 1,
        html: {
          __html: getLatestNotification(),
        },
        type: "urgent",
        value: "urgent",
      },
    ];

    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <Header />
        {isLoggedIn ? (
          <BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={listCourses} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login />
          </BodySectionWithMarginBottom>
        )}
        <BodySection title="News from the School">
          <p>Hi everyone!</p>
        </BodySection>
        {/* Display footer */}
        <Footer />
      </>
    );
  }
}
App.defaultProps = {
  isLoggedIn: false,
};
App.propTypes = {
  isLoggedIn: PropTypes.bool,
};
export default App;

// task_3/dashboard/src/App.test.js
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import App from './App';

describe('App component tests', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header').exists()).toBe(true);
  });

  it('renders a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body').exists()).toBe(true);
  });

  it('renders a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-footer').exists()).toBe(true);
  });

  it('CourseList', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('CourseList')).toHaveLength(0);
  });

  it('isLoggedIn true', () => {
    const wrapper = shallow(<App isLoggedIn />);
    expect(wrapper.find('Login')).toHaveLength(0);
    expect(wrapper.find('CourseList')).toHaveLength(1);
  });

  it('verify when key control and h appear a alert', () => {

    //mock from the function handleKeyDown
    const handleKeyDownMock = jest.fn();

    const wrapper = mount(<App handleKeyDown = {handleKeyDownMock}/>);
    //simulate the presing down 2 keys from the keyboard
    wrapper.simulate('keyDown',{ key: 'control', keyCode: 17 });
    wrapper.simulate('keyDown',{ key: 'h', keyCode: 72 });

    //what except
    expect(handleKeyDown).toHaveBeenCalled()
  })
});

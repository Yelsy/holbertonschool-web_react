import React from 'react';
import './Header.css';
import HolbertonLogo from '../assets/holberton-logo.jpg';
const Header = () => {
  return (
    <>
      <header className="App-header">
        <img src={ HolbertonLogo } alt="logo-holberton" />
        <h1>School dashboard</h1>
      </header>
    </>
  )
}
export default Header;
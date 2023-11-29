import React from 'react';
import './Login.css';
export const Login = () => {
  return (
    <>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email'/>
          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' />
          <button type='button'>OK</button>
        </form>
      </body>
    </>
  )
}

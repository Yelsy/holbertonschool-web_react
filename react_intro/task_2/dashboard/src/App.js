import './App.css';
import HolbertonLogo from './assets/images/holberton-logo.jpg';
//import Holberton from '/assets/images/holberton-logo.png';
import { getFullYear, getFooterCopy } from './utils';
function App() {
  return (
    <>
      <header className="App-header">
        <img src={ HolbertonLogo } alt="logo-holberton" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label>Email:</label>
          <input type='email'></input>
          <label>Password:</label>
          <input type='password'></input>
          <button type='button'>OK</button>
        </form>
      </body>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy('isIndex')}</p>
      </footer>
    </>
  );
}

export default App;

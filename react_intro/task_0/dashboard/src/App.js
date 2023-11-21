import './App.css';
import HolbertonLogo from './assets/images/holberton-logo.jpg';
function App() {
  return (
    <>
      <header className="App-header">
        <img src={ HolbertonLogo } alt="" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <footer className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </>
  );
}

export default App;

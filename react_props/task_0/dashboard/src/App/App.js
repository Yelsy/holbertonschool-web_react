import './App.css';
import Header from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Login } from '../Login/Login';
import { Notifications } from '../Notifications/Notifications.js';

const App = () => {
  return (
    <>
     <Notifications />
      <div className="App">
        <Header />
        <div className="App-body">
          <Login />
        </div>
        <Footer />
      </div>
    </> 
    
  )
}
export default App;

import './App.css';
import Home from './components/home/home';
import Login from './components/login/login';
import Register from './components/register/register';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {useState} from 'react';

function App() {

  const [user, setLogInUser] = useState({});
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id
              ? <Home setLogInUser={setLogInUser} user={user.name}></Home>
              : <Login setLogInUser={setLogInUser}></Login>
            }  
          </Route>
          <Route path="/login">
            <Login setLogInUser={setLogInUser}></Login>
          </Route>
          <Route path="/register">
            <Register setLogInUser={setLogInUser}></Register>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
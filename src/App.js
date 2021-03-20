
// import { Route, Router, Switch } from 'react-router';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import LogInSignUp from './Components/LogInsignup/LogInSignUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Search from './Components/Search/Search';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const  UserContext = createContext()
function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  
 
  return (
    <UserContext.Provider value={ [loggedInUser,setLoggedInUser] }>
      {/* <p>Name: {loggedInUser.email}</p> */}
      <Router>
        <Header name={loggedInUser.email}/>

        <Switch>
          <Route exact path='/'>
            <Home />
            
          </Route>
          <Route path="/login">
            <LogInSignUp />
          </Route>

          <PrivateRoute  path="/ride/:name">
            <Search />
          </PrivateRoute>
        
          
        </Switch>
      </Router>


      </UserContext.Provider>
  );
}

export default App;

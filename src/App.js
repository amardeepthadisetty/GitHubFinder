import React from 'react';
import Navbar from './layout/navbar';
import User from './components/users/user';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';

import About from './components/pages/About';

const App = () => {
 
  
  /* async componentDidMount(){
    //const REACT_APP_CLIENT_ID = 'cee1b4f12e8518a67075';
    //const REACT_APP_CLIENT_SECRET_KEY = '1b2b3466ae643e5062afb86eea704608a6c56b52';
    this.setState({ loading: true });
    const result = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET_KEY}`);
    
    this.setState({ users: result.data, loading:false});
    
  } */


  
  
  

  

  //render(){
    return (
      <GithubState>
        <AlertState>
        <Router>
              <div className="App">
                <Navbar  />
                <div className="container">
                  <Switch>
                    <Route exact path="/" component={ Home } />

                    <Route exact path="/about" component={ About } />
                    <Route exact path="/user/:login" component={ User } />
                  <Route component={NotFound } />
                  </Switch>

                  

                </div>
              </div>
          </Router>
        </AlertState>
      </GithubState>
    );
  //}
}

export default App;

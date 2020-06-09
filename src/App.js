import React, { Component, Fragment } from 'react';
import Navbar from './layout/navbar';
import Users from './components/users/users';
import User from './components/users/user';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './layout/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import About from './components/pages/About';

class App extends Component {
  state = {
    loading: false,
    users : [],
    repos :[],
    user : {},
    alert : null
  }
  async componentDidMount(){
    //const REACT_APP_CLIENT_ID = 'cee1b4f12e8518a67075';
    //const REACT_APP_CLIENT_SECRET_KEY = '1b2b3466ae643e5062afb86eea704608a6c56b52';
    this.setState({ loading: true });
    const result = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET_KEY}`);
    
    this.setState({ users: result.data, loading:false});
    
  }

  //get single user details
  getUser = async (username) => {
    this.setState({ loading: true });
    const result = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET_KEY}`);

    this.setState({ user: result.data, loading: false });
  }

  //get single user repos
  getUserRepos = async (username) => {
    this.setState({ loading: true });
    const result = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET_KEY}`);

    this.setState({ repos: result.data, loading: false });
  }
  
  searchUsersFunc = async (text) => {
    console.log("prop drilling is: ", text);
    this.setState({ loading: true });
    const result = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET_KEY}`);
    
    console.log("res is: ", result);
    this.setState({ users: result.data.items, loading: false });
  }

  clearUserss = () => {
    this.setState({ users: [] });
  }

  alertUserWithTwoParameters = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type }  });

    setTimeout(() => {
      this.setState({ alert:null});
    },3000);
  }

  render(){
    return (
    <Router>
          <div className="App">
            <Navbar  />
            <div className="container">
              <Switch>
                <Route exact path="/" render={ props => (
                  <Fragment>
                    <Alert alert={this.state.alert} />
                    <Search searchUsers={this.searchUsersFunc}
                      clearUsers={this.clearUserss}
                      isShow={this.state.users.length > 0 ? true : false}
                      alertUser={this.alertUserWithTwoParameters}
                    />
                    <Users loading={this.state.loading} users={this.state.users} />
                  </Fragment>
                  
                )} />

                <Route exact path="/about" component={ About } />
                <Route exact path="/user/:login" render={ props => (
                  <User {...props} 
                  getUser={this.getUser} 
                  getUserRepos={this.getUserRepos} 
                  repos ={this.state.repos}
                  user={this.state.user} 
                  loading={ this.state.loading }
                  />
                )} />
              </Switch>

              

            </div>
          </div>
      </Router>
    );
  }
}

export default App;

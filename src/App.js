import React, { Component } from 'react';
import Navbar from './layout/navbar';
import User from './components/users/users';
import './App.css';

class App extends Component {
  

  render(){
    return (
      <div className="App">
        <Navbar  />
        <div className="container">
          <User />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import NavBar from './NavBar'
import './css/App.css';
import {AuthProvider} from './AuthContext'

class App extends Component {

  render() {

    return (
      <AuthProvider>
      <div className="app">
        <h1>お料理ぽすと</h1>   
        <NavBar/>
        
      </div>
      </AuthProvider>
    );
  }
}

export default App;

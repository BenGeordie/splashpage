import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './Pages/Home.js'
import Info from './Pages/Info.js'


class App extends Component {
  render() {
    return (
        <div>
          <Home/>
          <Info/>
        </div>
    );
  }
}

export default App;

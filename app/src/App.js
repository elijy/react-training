import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Part1 from './Part1';
import Stateless from './Stateless'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Stateless />
        <Part1 list={['i','have','no','idea']}/>
      </div>
    );
  }
}

export default App;

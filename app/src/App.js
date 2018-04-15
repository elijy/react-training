import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Part1 from './Part1';
import Stateless from './Stateless';
import Stateful from './Stateful';
import Stateful2 from './Stateful2';
import Form from './Form';
import LifeCycle from './LifeCycle';


class App extends Component {
  constructor () {
    super();

    // This is how we add a method to our component
    this.upCounter = this.upCounter.bind(this);

    // Set the default state
    this.state = {count: 0};
  }

  upCounter() {
    // Get the count state
    let count = this.state.count;
    count += 1;
    // Set the state back but plus one;
    this.setState({count});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Stateless />
        <Part1 list={['i','have','no','idea']}/>
        <Stateful />
        <Stateful2 count={this.state.count} upCounter={this.upCounter}/>
        <Form />
        <LifeCycle />
      </div>
    );
  }
}

export default App;

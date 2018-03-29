import React, { Component } from 'react';

class Stateful extends Component {
  constructor() {
    // WE need this to start using state
    super();
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div className="stateful">
        <h2> This is stateful {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

export default Stateful;

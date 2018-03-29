import React, { Component } from 'react';

class Stateful2 extends Component {
  constructor() {
    // WE need this to start using state
    super();
  }

  render() {
    return (
      <div className="stateful">
        <h3> The click count is {this.props.count}</h3>
        <button className="clicker" onClick={() => this.props.upCounter()}> CLICK ME</button>
      </div>
    )
  }
}

export default Stateful2;

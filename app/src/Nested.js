import React, { Component } from 'react';

class Nested extends Component {
  render() {
    return (
      <div className="nested">
        <p>This is actually a nested component</p>
      </div>
    );
  }
}

export default Nested;

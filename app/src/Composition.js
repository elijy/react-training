import React, { Component } from 'react';

const Composition = props => {
    return (
      <div className="composition">
        { props.children }
      </div>
    );
}

export default Composition;

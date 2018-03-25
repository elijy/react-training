import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DefaultProps extends Component {
  render() {
    return (
      <div className="default-props">
        <p>{this.props.message}</p>
      </div>
    );
  }
}

DefaultProps.defaultProps = {
  message: "This is the default message because none was passed in"
}

DefaultProps.propTypes = {
  message: PropTypes.string
}

export default DefaultProps;

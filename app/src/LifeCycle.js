import React, { Component } from 'react';

class LifeCycle extends Component {

  componentWillMount() {
    // Check localStorage before loading component
    const storageValue = localStorage.getItem('componentMount');

    if(storageValue) {
      this.setState({
        title: storageValue
      })
    } else {
      this.setState({
        title: "There was nothing in local storage"
      })
    }
  }

  componentDidMount() {
      document.addEventListener("keydown", this.onKeyPressed.bind(this));
  }

  componentWillUnmount() {
      document.removeEventListener("keydown", this.onKeyPressed.bind(this));
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.keyPress !== 'S';
  }

  onKeyPressed(e) {
    this.setState({
      keyPress: String.fromCharCode(e.keyCode)
    })
  }

  render() {
    return (
      <div className="lifecycle" tabIndex="0">
        <h3>You can set my value below by setting 'componentMount' in localStorage </h3>
        <p>{this.state.title}</p>
        <div style={{background:'red'}}>
          <h3>I've also added an eventlitener to key strokes so type something....(Except the letter s)</h3>
          <p>{this.state.keyPress}</p>
        </div>
      </div>
    )
  }
}

export default LifeCycle;

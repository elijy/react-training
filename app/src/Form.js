import React, { Component } from 'react';

const Render = props => {
  return (
    <h2>{props.formValue}</h2>
  )
}

class Form extends Component {
  constructor() {
    super();
    /* This is how we hide the component */
    this.state = {render: false};
  }
  submitForm(e) {
    e.preventDefault();
    this.setState({render:true});
  }

  render() {
    return (
      <div className="form">
        <form ref={ input => { this.form = input }} action="" onSubmit={(e) => this.submitForm(e)}>
          <input ref={ input => { this.name = input }} type="text" placeholder='Name' />
          <button type='submit'>Submit ?</button>
        </form>
        { this.state.render && < Render formValue={this.name.value}/>}
      </div>
    )
  }
}

export default Form;

import React, { Component } from 'react';
import Nested from './Nested';
import Composition from './Composition';
import DefaultProps from './DefaultProps';

class Part1 extends Component {
  render() {
    // Here's a simple component
    function Welcome(props) {
      return <h1>{props.name}</h1>;
    }

    return (
      <div className="part-one">
        { /* This Component covers all the questions for March 15th*/}
        <h2>March 15th</h2>
        <Welcome name='super simple component' />
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eum nostrum, nihil architecto modi culpa voluptatum ullam ex. Quidem, harum, tenetur. Ea blanditiis dolores suscipit et quia eaque repudiandae nostrum?</p>
        <p>I'm populating this list through props</p>
        <ol>
          { this.props.list.map( (item) =>{ return <li>{item}</li>})}
        </ol>
        <Nested />
        <Composition>
          <h3>I'm rendering this text inside a component using props.children</h3>
        </Composition>
        <Composition>
          <p>This is also the same component but im passing in a different component this time</p>
        </Composition>
        <DefaultProps/>
        <DefaultProps message={'im passing this message in from the parent component'}/>
      </div>
    );
  }
}

export default Part1;

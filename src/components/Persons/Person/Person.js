import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
  // Creation Lifecyle
  constructor(props) {
    super(props);
    console.log("[Person.js] constructor", props);
  };
  componentWillMount() {
    console.log("[Person.js] componentWillMount");
  };
  componentDidMount() {
    console.log("[Person.js] componentDidMount");
  };
  componentWillUnmount() {
    console.log("[Person.js] inside componentWillUnmount", this.props.name );
  };
  // Update Lifecyle
  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Person.js] inside componentWillReceiveProps', nextProps);
  };

  render () {
    console.log("[Person.js] render");
    return (
      <div
        className = { classes.Person }>
        <p onClick={ this.props.personDelete }>The { this.props.name } is { this.props.age } old:</p>
        <p>{ this.props.children }</p>
        <input
          className={ classes.PersonIput }
          type="text"
          onChange={ this.props.changeName }
          value={ this.props.name }/>
      </div>
    );
  }
}

export default Person;

import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor(props) {
      super(props);
      console.log("[Persons.js] constructor", props);
    };
    componentWillMount() {
      console.log("[Persons.js] componentWillMount");
    };
    componentDidMount() {
      console.log("[Persons.js] componentDidMount");
    };
    shouldComponentUpdate(nextProps, nextState) {
      console.log("[UPDATE Person.js] inside the shouldComponentUpdate show", nextProps, nextState);
      return  nextProps.persons !== this.props.persons;
    };
    render () {
      console.log("[Persons.js] render component");
      return this.props.persons.map((person, index) => {
        return <Person
          key={ person.id }
          id={ person.id}
          name={ person.name }
          age={ person.age }
          changeName={ (event) => this.props.changeNameHandler(event, person.id) }
          personDelete={() => this.props.deletePersonHandler(index) }>
        </Person>
      })
    }
}

export default Persons;

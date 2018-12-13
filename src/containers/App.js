import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] inside the constructor", props);
    this.state = {
      persons: [
        { id: "qawseduj", name: 'Paul', age: 64 },
        { id: "zaxscdvf", name: 'George', age: 30 },
        { id: "edrftgyh", name: 'Ringo', age: 20 },
        { id: "qazwsxed", name: 'Lennon', age: 15 },
      ],
      showPersons: false,
    };
  };
  componentWillMount() {
    console.log("[App.js] inside the componentWillMount");
  };
  componentDidMount() {
    console.log("[App.js] inside the componentDidMount");
  };
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[UPDATE Person.js] inside the shouldComponentUpdate show", nextProps, nextState);
    return true;
  };
  componentWillUpdate() {
    console.log("[UPDATE Person.js] inside the componentWillUpdate");
  };
  componentDidUpdate() {
    console.log("[UPDATE Person.js] inside the componentDidUpdate");
  };
  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };
  deletePersonHandler = (personIndex) => {
    const newPersons = this.state.persons;
    newPersons.splice(personIndex, 1);
    this.setState({ persons: newPersons });
  };
  togglePersonHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };
  toggleCustomerHandler = () => {
    this.setState( { showCustomers: !this.state.showCustomers });
  }
  render() {
    console.log("[App.js] inside the render");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons = { this.state.persons }
          deletePersonHandler = { this.deletePersonHandler }
          changeNameHandler = { this.changeNameHandler }
        />
      );

    }
    return (
        <div className= { classes.App }>
          <button onClick={ () => this.setState( { showPersons: true } ) }>Show persons</button>
          <Cockpit
            appTitle = { this.props.title }
            showPersons = { this.state.showPersons }
            persons = { this.state.persons }
            togglePersonHandler = { this.togglePersonHandler }
          />
          { persons }
        </div>
    );
    // return React.createElement('div', null,React.createElement('h1', { className: 'App' }, 'Does this work now'));
  }
}

export default App;

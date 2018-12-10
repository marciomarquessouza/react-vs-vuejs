import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: "qawseduj", name: 'Paul', age: 64 },
      { id: "zaxscdvf", name: 'George', age: 30 },
      { id: "edrftgyh", name: 'Ringo', age: 20 },
      { id: "qazwsxed", name: 'Lennon', age: 15 },
    ],
    showPersons: false,
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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person
              key={ person.id }
              name={ person.name }
              age={ person.age }
              changeName={ (event) => this.changeNameHandler(event, person.id) }
              personDelete={() => this.deletePersonHandler(index) }>
            </Person>
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }
    return (
        <div className="App">
          <h1>Heyact</h1>
          <p className={ classes.join(' ') }>There are { this.state.persons.length } person(s)</p>
          <button
            style={ style }
            onClick= { this.togglePersonHandler } >
            Switch Person
          </button>
          { persons }
        </div>
    );
    // return React.createElement('div', null,React.createElement('h1', { className: 'App' }, 'Does this work now'));
  }
}

export default App;

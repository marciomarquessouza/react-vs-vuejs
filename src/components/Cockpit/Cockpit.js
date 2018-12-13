import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  let btnClass = classes.Button;
  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  return (
    <div className = { classes.Cockpit }>
      <h1>{ props.appTitle }</h1>
      <p className={ assignedClasses.join(' ') }>
        It's woking fine
      </p>
      <button
        className = { btnClass }
        onClick= { props.togglePersonHandler } >
        Switch Person
      </button>
    </div>
  );
}

export default cockpit;

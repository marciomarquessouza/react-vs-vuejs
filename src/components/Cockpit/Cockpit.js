import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = classes.Button;
  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(' ');
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.Red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <>
      <h1>{ props.appTitle }</h1>
      <p className={ assignedClasses.join(' ') }>
        It's woking fine
      </p>
      <button
        className = { btnClass }
        onClick= { props.togglePersonHandler } >
        Switch Person
      </button>
    </>
  );
}

export default cockpit;

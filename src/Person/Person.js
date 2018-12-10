import React from 'react';
import Radium from 'radium';
import '../App.css';
import './Person.css';

var person = (props) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };
  return (
    <div
      className="Person" style = { style }>
      <p onClick={ props.personDelete }>The { props.name } is { props.age } old:</p>
      <input
        className="PersonIput"
        type="text"
        onChange={ props.changeName }
        value={ props.name }/>
    </div>
  );
}

export default Radium(person);

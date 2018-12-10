import React from 'react';
import '../App.css';
import './Person.css';

var person = (props) => {
  return (
    <div
      className="Person">
      <p onClick={ props.personDelete }>The { props.name } is { props.age } old:</p>
      <input
        className="PersonIput"
        type="text"
        onChange={ props.changeName }
        value={ props.name }/>
    </div>
  );
}

export default person;

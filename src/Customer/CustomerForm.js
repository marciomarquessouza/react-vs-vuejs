import React from 'react';

const customerForm = (props) => {
  return (
    <div>
      <p>
        <label>Name</label>
        <input type="text" onChange={ props.nameHandler } value={ props.name }/>
      </p>
      <p>
        <label>Age</label>
        <input type="text" onChange={ props.ageHandler } value={ props.age }/>
      </p>
    </div>
  );
};

export default customerForm;

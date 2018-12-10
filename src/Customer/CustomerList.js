import React from 'react';

const formList = (props) => {
  return(
    <div>
      <p><b>Name:</b> { props.name } <b>Age:</b> { props.age}</p>
    </div>
  );
};

export default formList;

import React, { useState } from "react";
import PropTypes from "prop-types";

const Fgreeting = (props) => {
  const [age, setAge] = useState(25);
  const birthday = () => {
    setAge(age + 1);
  };
  return (
    <div>
      <h1>Hola {props.name}, como estas?</h1>
      <span>tienes ya {age}</span>
      <div>
        <button onClick={() => birthday()}>cumpli años</button>
      </div>
    </div>
  );
};

Fgreeting.propTypes = {
  name: PropTypes.string,
};

export default Fgreeting;

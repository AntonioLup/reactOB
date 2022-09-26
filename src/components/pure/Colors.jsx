import React, { useState } from "react";

const Colors = () => {
  let red = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  const [colors, setColor] = useState(red, blue, green);
  function changeColor() {
    setColor(!colors);
  }

  return (
    <>
      <div
        className="caja"
        style={{
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      >
        <p>
          color: red {red}, green {green}, blue {blue}
        </p>

        <button
          className="btn border btn-primary"
          onClick={() => changeColor()}
        >
          Click
        </button>
      </div>
    </>
  );
};

export default Colors;

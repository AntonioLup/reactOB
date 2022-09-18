import React from "react";

function Ejemplo4(props) {
  return (
    <div>
      <h2>{props.nombre}</h2>
      <span>{props.children}</span>
    </div>
  );
}

export default Ejemplo4;

import React, { useEffect, useState } from "react";

const Clock = () => {
  const defaultstate = {
    fecha: new Date(),
    edad: 0,
    nombre: "antonio",
    apellidos: "lopez",
  };
  const [state, setstate] = useState(defaultstate);
  useEffect(() => {
    const intervalAge = setInterval(() => {
      actualiceUser();
    }, 1000);
    return () => {
      clearInterval(intervalAge);
    };
  });
  const actualiceUser = () => {
    return setstate({
      fecha: state.fecha,
      edad: state.edad + 1,
      nombre: state.nombre,
      apellidos: state.apellidos,
    });
  };
  return (
    <div>
      <h2>
        Hora Actual:
        {state.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {state.nombre} {state.apellidos}
      </h3>
      <h1>Edad: {state.edad}</h1>
    </div>
  );
};

export default Clock;

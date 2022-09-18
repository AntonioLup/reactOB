import React, { useState } from "react";

const Ejemplo = () => {
  const valorinicial = 0;
  const personalinicial = {
    nombre: "antonio",
    email: "antonio@gmail.com",
  };
  const [contador, setContador] = useState(valorinicial);
  const [persona, setPerona] = useState(personalinicial);
  function incrementarContador() {
    setContador(contador + 1);
  }
  function actualizar() {
    setPerona({
      nombre: "jose",
      email: "jose@gmail.com",
    });
  }
  return (
    <div>
      <h1>Ejemplo</h1>
      <h2>CONTADOR: {contador}</h2>
      <button onClick={() => incrementarContador()}>click</button>
      <h2>PERSONA:</h2>
      <p>{persona.nombre}</p>
      <p>{persona.email}</p>
      <button onClick={() => actualizar()}>click</button>
    </div>
  );
};
export default Ejemplo;

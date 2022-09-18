import React, { useEffect, useRef, useState } from "react";

function Ejemplo2() {
  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);
  const miRef = useRef();
  function incrementar() {
    setContador(contador + 1);
  }
  function incrementar2() {
    setContador2(contador2 + 14);
  }
  //   useEffect(() => {
  //     console.log("cambio del stado");
  //     console.log("mostrando referencia");
  //     console.log(miRef);
  //   });
  useEffect(() => {
    console.log("cambio del contador");
    console.log(miRef);
  }, [contador]);
  return (
    <div>
      <h1>Ejemplo</h1>
      <p>{contador}</p>
      <p>{contador2}</p>
      <button onClick={() => incrementar()}>click</button>
      <button onClick={() => incrementar2()}>click</button>
      <h4 ref={miRef}>ejemplo de referencia</h4>
    </div>
  );
}

export default Ejemplo2;

import React, { useContext, useState } from "react";
const miContexto = React.createContext(null);

function Componente1() {
  const state = useContext(miContexto);
  return (
    <div>
      <h1>El token es {state.token}</h1>
      <Componente2 />
    </div>
  );
}
function Componente2() {
  const state = useContext(miContexto);
  return (
    <div>
      <h2>la sesion es {state.sesion}</h2>
    </div>
  );
}

export default function MiContexto() {
  const estadoInicial = {
    token: "jerfpoemveobn",
    sesion: 1,
  };
  const [Data, setData] = useState(estadoInicial);
  function actualizaarSesion() {
    setData({
      token: "jwtsdfnerg",
      sesion: Data.sesion + 1,
    });
  }
  return (
    <miContexto.Provider value={Data}>
      <Componente1 />
      <button onClick={actualizaarSesion}>actualizar</button>
    </miContexto.Provider>
  );
}

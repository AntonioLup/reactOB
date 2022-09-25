import React, { useState } from "react";
import Child from "../pure/child";

const Father = () => {
  const [name, setName] = useState("Martín");

  function showMessage(text) {
    alert(`message ${text}`);
  }
  function updateName(newName) {
    setName(newName);
  }

  return (
    <div style={{ padding: "10px" }}>
      <Child name={name} send={showMessage} update={updateName} />
    </div>
  );
};
export default Father;

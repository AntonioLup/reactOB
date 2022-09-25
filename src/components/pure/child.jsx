import React, { useRef } from "react";

const Child = ({ name, send, update }) => {
  function pressButton() {
    const text = messagef.current.value;
    alert(`hola ${name} mesage input ${text}`);
  }
  function pressButtonParamas(text) {
    alert(`Text: ${text}`);
  }
  function submitName(e) {
    e.preventDefault();
    update(nameRef.current.value);
  }

  const messagef = useRef("");
  const nameRef = useRef("");

  return (
    <div>
      <p onMouseOver={(e) => (e.target.style.color = "red")}>hello, {name}</p>
      <button className="btn bg-primary mx-1" onClick={pressButton}>
        Click1
      </button>
      <button className="btn bg-danger mx-1" onClick={pressButton}>
        Click2
      </button>
      <button className="btn bg-info mx-1" onClick={() => pressButtonParamas()}>
        Click3
      </button>
      <input
        placeholder="insert a text"
        onChange={(e) => console.log(e.target.value)}
        ref={messagef}
      />

      <button onClick={() => send(messagef.current.value)}>submit</button>
      <div style={{ marginTop: "20px" }}>
        <form onSubmit={submitName}>
          <input ref={nameRef} placeholder="New Name" />
          <button type="submit">Update Name</button>
        </form>
      </div>
    </div>
  );
};
export default Child;

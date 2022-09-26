import React, { useState } from "react";

let red = 0;
let green = 200;
let blue = 150;

const loggedStyle = {
  backgroundColor: `rgb(${red},${green},${blue})`,
  color: "white",
  fontWeight: "bold",
};

// ? Estilo para usuario no logueado
const unloggedStyle = {
  backgroundColor: "tomato",
  color: "white",
  fontWeight: "bold",
};

const LoginButton = ({ loginaction, propStyle }) => {
  return (
    <button style={propStyle} onClick={loginaction}>
      LogIn
    </button>
  );
};
const LogOutButton = ({ logoutaction, propStyle }) => {
  return (
    <button style={propStyle} onClick={logoutaction}>
      LogOut
    </button>
  );
};

const OptionalRender = () => {
  const [access, setAccess] = useState(true);
  const [message, setMessage] = useState(0);
  const logoutAction = () => {
    setAccess(false);
  };
  const loginAction = () => {
    setAccess(true);
  };

  let OptionalButton;
  if (access) {
    OptionalButton = (
      <LogOutButton propStyle={unloggedStyle} logoutaction={logoutAction} />
    );
  } else {
    OptionalButton = (
      <LoginButton propStyle={loggedStyle} loginaction={loginAction} />
    );
  }
  let unreadMessage = () => {
    setMessage(message + 1);
  };
  return (
    <div>
      {/*  */}
      {OptionalButton}
      {/*  */}
      {access ? (
        <div>
          {message > 0 && <p>{message} new message</p>}
          {message === 0 && <p>{message} NO message</p>}
          <button onClick={() => unreadMessage()}>message</button>
        </div>
      ) : null}
    </div>
  );
};

export default OptionalRender;

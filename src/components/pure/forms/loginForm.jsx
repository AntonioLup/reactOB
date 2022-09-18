import React, { useState } from "react";

const LoginForm = () => {
  const incialData = [
    {
      user: "",
      password: "",
    },
  ];
  const [data, setdata] = useState(incialData);
  return <div>loginForm</div>;
};

export default LoginForm;

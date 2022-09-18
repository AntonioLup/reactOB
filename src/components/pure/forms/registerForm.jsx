import React, { useState } from "react";

const RegisterForm = () => {
  const incialCredencial = [
    {
      user: "",
      name: "",
      email: "",
      password: "",
    },
  ];
  const [credential, setcredential] = useState(incialCredencial);
  return <div>registerForm</div>;
};

export default RegisterForm;

import React, { useState } from "react";
import { validate } from "./Validate.jsx";

export { validate };

export default function Form() {
  const [errors, setErrors] = React.useState({});
  const [input, setInput] = React.useState({
    username: "",
    password: "",
  });
  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        // ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (errors.username) return alert("Hay errores en el Usuario");
    if (errors.password) return alert("Hay errores en el Password");
    alert("Se envio la información");
  };

  return (
    <form onSubmit={(e) => handleOnSubmit(e)}>
      <div>
        <label>Username:</label>
        <input
          className={errors.username && "danger"}
          autoComplete="off"
          type="text"
          name="username"
          value={input.username}
          onChange={handleInputChange}
        />
        {errors.username && <p className="danger">{errors.username}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          className={errors.password && "danger"}
          type="password"
          name="password"
          value={input.password}
          onChange={handleInputChange}
        />
        {errors.password && <p className="danger">{errors.password}</p>}
      </div>
      <input type="submit" />
    </form>
  );
}

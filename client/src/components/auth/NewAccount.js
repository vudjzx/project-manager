import React, { useState } from "react";
import { Link } from "react-router-dom";
// login state
const NewAccount = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
    passwordConfirm: "",
  });
  // get user information
  const { email, password, username, passwordConfirm } = user;
  // get user info on change
  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  // submit the form
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Sign up</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={onChange}
              placeholder="Your name"
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Email"
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              name="password"
              placeholder="Password"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Confirm password</label>
            <input
              type="password"
              id="passwordConfirm"
              value={passwordConfirm}
              name="passwordConfirm"
              placeholder="Confirm password"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Sign up"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
          Login instead
        </Link>
      </div>
    </div>
  );
};

export default NewAccount;

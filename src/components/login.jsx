// Temporarily disabled until I figure out the modal

import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { login } from "../helpers/apiCalls";

const Login = ({
  username,
  setUsername,
  password,
  setPassword,
  setToken,
  loggedIn,
  setLoggedIn,
}) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // const handleChange = (event) => {
  //   setUsername(event.target.value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    login(username, password, setLoggedIn, setToken, setSuccess, setError);
    setUsername("");
    setPassword("");
  };

  return loggedIn ? (
    <Redirect to="/" />
  ) : (
    <div id="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <label>Username:</label>
        <input
          type="text"
          required
          value={username}
          placeholder="Enter your username"
          minLength="8"
          maxLength="20"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          required
          value={password}
          placeholder="Enter your password"
          minLength="8"
          maxLength="20"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
        <Link to="/register">Don't have an account? Sign up!</Link>
      </form>
      {success ? <p>Successfully Logged In</p> : null}
      {error.length ? <p>{error}</p> : null}
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { registerUser } from "../helpers/apiCalls";

export const Register = ({ setToken, username, setUsername, setAndStoreUsername }) => {
  const [passConfirm, setPassConfirm] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(username);
    registerUser(username, password, setToken);
    setAndStoreUsername(username);
    setUsername("");
    setPassword("");
    setPassConfirm("");
    console.log(password);
  };

  return (
    <div id="container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
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
        <label>Confirm Password:</label>
        <input
          type="password"
          required
          value={passConfirm}
          placeholder="Re-enter your password"
          minLength="8"
          maxLength="20"
          onChange={(e) => setPassConfirm(e.target.value)}
        />
        <button type="submit">Create Account</button>
        {password !== passConfirm ? <p>Passwords do not match</p> : null}
      </form>
      {success ? <h2>Successfully registered!</h2> : null}
      {error.length ? <p>{error}</p> : null}
    </div>
  );
};

export default Register;

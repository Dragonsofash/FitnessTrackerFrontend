import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../helpers/apiCalls";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username);
    login();
    setUsername("");
    setPassword("");
    console.log(password);
    window.location.replace("/Login");
  };

  login(username, password);

  return (
    <div id="container">
      <div id="navbar">Login</div>
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleChange}
        ></input>
        <h2>Password</h2>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        ></input>
        <button type="submit">Log In</button>
        <Link to="/register">Don't have an account? Sign up!</Link>
      </form>
    </div>
  );
};

export default Login;

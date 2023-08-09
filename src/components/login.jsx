import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../helpers/apiCalls";
import { Alert, Button, Container, Form } from "react-bootstrap";

const Login = ({ setToken, username, setUsername, setAndStoreUsername }) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    login(username, password, setToken, setSuccess, setError);
    setAndStoreUsername(username);
    setUsername("");
    setPassword("");
  };

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            required
            value={username}
            placeholder="Enter your username"
            minLength="8"
            maxLength="20"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            value={password}
            placeholder="Enter your password"
            minLength="8"
            maxLength="20"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Log In
        </Button>
        <Link to="/register">Don't have an account? Sign up!</Link>
      </Form>
      {error && <Alert variant="danger">Error: {error}</Alert>}
      {success && <Alert variant="success">Successfully Logged in!</Alert>}
    </Container>
  );
};

export default Login;

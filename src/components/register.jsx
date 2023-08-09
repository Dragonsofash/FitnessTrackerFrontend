import React, { useState } from "react";
import { registerUser } from "../helpers/apiCalls";
import { Alert, Button, Container, Form } from "react-bootstrap";

export const Register = ({
  setToken,
  username,
  setUsername,
  setAndStoreUsername,
}) => {
  const [passConfirm, setPassConfirm] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(username);
    registerUser(username, password, setToken, setSuccess, setError);
    setAndStoreUsername(username);
    setUsername("");
    setPassword("");
    setPassConfirm("");
    console.log(password);
  };

  return (
    <Container>
      <h1>Sign Up</h1>
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

        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            required
            value={passConfirm}
            placeholder="Re-enter your password"
            minLength="8"
            maxLength="20"
            onChange={(e) => setPassConfirm(e.target.value)}
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Create Account
        </Button>
        {password !== passConfirm ? <p>Passwords do not match</p> : null}
      </Form>
      {error && <Alert variant="danger">Error: {error}</Alert>}
      {success && <Alert variant="success">Account Created</Alert>}
    </Container>
  );
};

export default Register;

import React, { useState } from "react";
import { login } from "../../helpers/apiCalls";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { Form } from "react-bootstrap";

const Login = ({ setToken, loggedIn, setLoggedIn }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //   const setAndStoreToken = (token) => {
  //     localStorage.setItem("token", token);
  //     setToken(token);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password, setLoggedIn, setToken, setError);
    setUsername("");
    setPassword("");
  };

  return loggedIn ? (
    <Redirect to="/me" />
  ) : (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="Username">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                required
                autoFocus
                value={username}
                placeholder="Enter your Username"
                minLength={8}
                maxLength={20}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Password">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="text"
                required
                value={password}
                placeholder="Enter your Password"
                minLength={8}
                maxLength={20}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            {error.length ? <p>{error}</p> : null}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;

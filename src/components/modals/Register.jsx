import React, { useState } from "react";
import { registerUser } from "../../helpers/apiCalls";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

const Register = ({ setToken, setLoggedIn }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const [error, setError] = useState("");
  //   const setAndStoreToken = (token) => {
  //     localStorage.setItem("token", token);
  //     setToken(token);
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    registerUser(username, password, setToken, setLoggedIn, setError);
    setUsername("");
    setPassword("");
    setPassConfirm("");
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create an Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                required
                autoFocus
                value={username}
                placeholder="Enter a username"
                minLength={8}
                maxLength={20}
                onChange={(e) => setUsername(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                required
                value={password}
                placeholder="Enter a password"
                minLength={8}
                maxLength={20}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Comfirm Password:</Form.Label>
              <Form.Control
                type="password"
                required
                value={passConfirm}
                placeholder="Re-enter your password"
                minLength={8}
                maxLength={20}
                onChange={(e) => setPassConfirm(e.target.value)}
              ></Form.Control>
            </Form.Group>
            {password !== passConfirm ? <h3>Passwords do not match</h3> : null}
            {error.length ? <p>{error}</p> : null}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleClose}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Register;

import React, { useState } from 'react';
import { login } from '../../helpers/apiCalls';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const Login = ({
  username,
  setUsername,
  password,
  setPassword,
  setToken,
  loggedIn,
  setLoggedIn,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [error, setError] = useState("");
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
            <form onSubmit={handleSubmit}>
                <label htmlFor="Username">Username:</label>
                <input type="text" required value={username} placeholder='Enter your username' minLength={8} maxLength={20} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="Password"></label>
                <input type="password" required value={password} placeholder='Enter your password' minLength={8} maxLength={20} onChange={(e) => setPassword(e.target.value)} />
            </form>
            {error.length ? <p>{error}</p> : null}
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
}

export default Login;
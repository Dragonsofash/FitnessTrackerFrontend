import React from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Navbar as Navigation,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useEffect, useState } from "react";

// import Login from "./modals/Login";
// import Register from "./modals/Register";

const Navbar = ({ isLoggedIn, onLogout, token }) => {
  const history = useHistory();
  const [addRoutines, setAddRoutines] = useState(false);
  const [newUser, setNewUser] = useState(true);

  const home = () => {
    history.push("/");
  };
  const activities = () => {
    history.push("/Activities");
  };
  const routines = () => {
    history.push("/Routines");
  };
  const account = () => {
    history.push("/Routines/MyRoutines");
  };
  const login = () => {
    history.push("/Login");
  };
  const register = () => {
    history.push("/Register");
  };
  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setNewUser(true);
    history.push("/");
  };

  const checkToken = () => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setAddRoutines(true);
      setNewUser(false);
    } else {
      setAddRoutines(false);
      setNewUser(true);
    }
  };

  useEffect(() => {
    checkToken();
  }, [token]);

  return (
    <Navigation expand="lg">
      <Navigation.Brand onClick={home}>Fitness Tracker</Navigation.Brand>
      <Navigation.Toggle aria-controls="navbar-collapse" />
      <Navigation.Collapse id="navbar-collapse">
        <Nav className="ml-auto">
            <NavDropdown title="Account" id="account-dropdown">
              <NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          <Button onClick={home}>Home</Button>
          <Button onClick={routines}>Routines</Button>
          <Button onClick={activities}>Activities</Button>

          {addRoutines === true && (
            <Button onClick={account}>My Routines</Button>
          )}
        </Nav>
      </Navigation.Collapse>
      <Navigation.Collapse id="navbar-collapse">
        <Nav>
          {/* <Register />
        <Login /> */}

          {newUser === true && (
            <>
              <Button onClick={login}>Login</Button>
              <Button onClick={register}>Register</Button>
            </>
          )}

          {newUser === false && <Button onClick={logOut}>Logout</Button>}
        </Nav>
      </Navigation.Collapse>
    </Navigation>
  );
};

export default Navbar;

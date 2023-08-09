import React from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Navbar as Navigation,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";
// import Login from "./modals/Login";
// import Register from "./modals/Register";

const Navbar = ({ isLoggedIn, onLogout }) => {
  const history = useHistory();

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
    history.push("/MyRoutines");
  };
  const login = () => {
    history.push("/Login");
  };
  const register = () => {
    history.push("/Register");
  };
  const logOut = () => {
    localStorage.removeItem("token");
    history.push("/");
  };
  return (
    <Navigation expand="lg">
      <Navigation.Brand onClick={home}>Fitness Tracker</Navigation.Brand>
      <Navigation.Toggle aria-controls="navbar-collapse" />
      <Navigation.Collapse id="navbar-collapse">
        <Nav className="ml-auto">
          {isLoggedIn ? (
            <NavDropdown title="Account" id="account-dropdown">
              <NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
            </>
          )}
          <Button onClick={home}>Home</Button>
          <Button onClick={routines}>Routines</Button>
          <Button onClick={activities}>Activities</Button>
          <Button onClick={account}>My Account</Button>
        </Nav>
      </Navigation.Collapse>
      <Navigation.Collapse id="navbar-collapse">
        <Nav>
          {/* <Register />
        <Login /> */}
          <Button onClick={login}>Login</Button>
          <Button onClick={register}>Register</Button>
          <Button onClick={logOut}>Logout</Button>
        </Nav>
      </Navigation.Collapse>
    </Navigation>
  );
};

export default Navbar;

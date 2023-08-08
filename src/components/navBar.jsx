import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Navbar as Navigation, Nav } from "react-bootstrap";
import Login from "./modals/Login";
import Register from "./modals/Register";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
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
    <Navigation collapse="lg">
      <Navigation.Brand onClick={home}>Fitness Tracker</Navigation.Brand>
      <Navigation.Toggle aria-controls="basic-navbar-nav" />
      <Navigation.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Button onClick={routines}>Routines</Button>
          <Button onClick={activities}>Activities</Button>
          <Button onClick={account}>My Account</Button>
        </Nav>
      </Navigation.Collapse>
      <Nav>
        {/* <Register />
        <Login /> */}
        <Button onClick={login}>Login</Button>
        <Button onClick={register}>Register</Button>
        <Button onClick={logOut}>Logout</Button>
      </Nav>
    </Navigation>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import Login from "./modals/Login";
import Register from "./modals/Register";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { Button, Nav } from "react-bootstrap";

export const Navbar = () => {
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
    history.push("MyRoutines");
  };
  const logOut = () => {
    localStorage.removeItem("token");
    history.push("/");
  };
  return (
    <Nav className="lg">
      <Button onClick={home}>Home</Button>
      <Button onClick={routines}>Routines</Button>
      <Button onClick={activities}>Activities</Button>
      <Button onClick={account}>MyAccount</Button>
      <Register />
      <Login />
      <Button onClick={logOut}>Logout</Button>
    </Nav>
  );
};

export default Navbar;

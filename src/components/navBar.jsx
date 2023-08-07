import { Link } from "react-router-dom";
import ActivityForm from "./modals/ActivityForm";
import Login from "./modals/Login";
import Register from "./modals/Register";

export const Navbar = () => {
  const logOut = () => {
    localStorage.removeItem("token");
    window.location.replace("/");
  };
  return (
    <>
      <Link to="/Login">Login/Resgister</Link>
      <Link to="/Login" onClick={logOut}>
        Logout
      </Link>
      <Link to="/Activities">Activities</Link>
      <Link to="/Routines">Routines</Link>
      <Register />
      <Login />
    </>
  );
};

export default Navbar;

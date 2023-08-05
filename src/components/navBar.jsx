import { Link } from "react-router-dom";

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
    </>
  );
};

export default Navbar;

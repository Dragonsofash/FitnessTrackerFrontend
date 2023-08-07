// Temporarily disabled until I figure out the modal

// import React, { useState } from "react";
// import { Link, Redirect } from "react-router-dom";
// import { login } from "../helpers/apiCalls";

// const Login = ({
//   username,
//   setUsername,
//   password,
//   setPassword,
//   setToken,
//   loggedIn,
//   setLoggedIn,
// }) => {
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState("");

  // const handleChange = (event) => {
  //   setUsername(event.target.value);
  // };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(username);
//     console.log(password);
//     login(username, password, setLoggedIn, setToken, setSuccess, setError);
//     setUsername("");
//     setPassword("");
//     // window.location.replace("/Login");
//   };

//   return loggedIn ? (
//     <Redirect to="/" />
//   ) : (
//     <div id="container">
//       <div id="navbar">Login</div>
//       <form onSubmit={handleSubmit}>
//         <h1>Log In</h1>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={handleChange}
//         ></input>
//         <h2>Password</h2>
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(event) => {
//             setPassword(event.target.value);
//           }}
//         ></input>
//         <button type="submit">Log In</button>
//         <Link to="/register">Don't have an account? Sign up!</Link>
//       </form>
//     </div>
//   );
// };

// export default Login;

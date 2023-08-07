// import React, { useState } from "react";
// import { BASE_URL, registerUser, checkForAccout } from "../helpers/apiCalls";

// export const Register = ({
//   username, setUsername, password, setPassword,setToken, setLoggedIn
// }) => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [passConfirm, setPassConfirm] = useState("");
  // const [success, setSuccess] = useState(false);
  // const [error, setError] = useState("");

  // const handleChange = (event) => {
  //   setUsername(event.target.value);
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log(username);
  //   registerUser(
  //     username, password, setToken, setLoggedIn, setSuccess, setError
  //   );
  //   setUsername("");
  //   setPassword("");
  //   setPassConfirm("");
  //   console.log(password);
  // };

  // registerUser(username, password);
//   const registerUser = async () => {
//     try {
//       const response = await fetch(`${BASE_URL}/users/register`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           user: {
//             username: username,
//             password: password,
//           },
//         }),
//       });
//       const result = await response.json();
//       console.log(result);
//       return result;
//     } catch (err) {
//       console.error(err);
//     }
//   };
  

//   return (
//     <div id="container">
//       <div id="navbar">Sign Up</div>
//       <form onSubmit={handleSubmit}>
//         <h1>Create Username</h1>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={handleChange}
//         ></input>
//         <h2>Create Password</h2>
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(event) => {
//             setPassword(event.target.value);
//           }}
//         ></input>
//         <button type="submit">Create Account</button>
//       </form>
//     </div>
//   );
// };

// export default Register;

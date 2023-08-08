// As an unregistered visitor I want to:
// -see a Sign Up/Sign In form in the header/footer, on a tab (with or without matching route) or in a modal
// -be able to sign up for a new account with valid username/password combination
// -see meaningful messages if there are errors during registration, so that I may correct them
// -see tabbed navigation for Routines and Activities (with matching routes)

// As a registered user I want to:
// -be able to log in with my username/password combination
// -see meaningful messages if there are errors during login, so that I may correct them
// -stay logged in between page visits (for example, if I close my browser, and come back later)
// -be able to log out if I am logged in
// -see tabbed navigation for Routines, My Routines (once logged in), and Activities (with matching routes)
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import "bootstrap/dist/css/bootstrap.min.css";
import {
  Home,
  Navbar,
  Activities,
  Routines,
  // MyRoutines,
  // MyActivities,
  Login,
  Register,
} from "./components";
import { Container } from "react-bootstrap";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(undefined);
  const [token, setToken] = useState("");
  const [id, setId] = useState("");
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      setLoggedIn(true);
    }
  }, []);

  const setAndStoreToken = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  return (
    <BrowserRouter>
      <Container fluid>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home loggedIn={loggedIn} token={token} setId={setId} />
          </Route>

          <Route exact path="/Activities">
            <Activities />
          </Route>

          <Route exact path="/Routines">
            <Routines loggedIn={loggedIn} token={token} setId={setId} />
          </Route>

          <Route exact path="/Register">
            <Register
              token={token}
              setLoggedIn={setLoggedIn}
              setToken={setAndStoreToken}
            />
          </Route>

          <Route exact path="/Login">
            <Login
              token={token}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              setToken={setAndStoreToken}
            />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

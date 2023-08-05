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
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Register, Login, Navbar } from "./components";
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, [token]);

  return (
    <BrowserRouter>
      <header>
        <Navbar />
        <Route exact path="/Register">
          <Register />
        </Route>
        <Route exact path="/Login">
          <Login setToken={setToken} />
        </Route>
      </header>
      <Switch>
        <Route path="/"></Route>
      </Switch>
      <footer></footer>
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

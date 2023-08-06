//make a homepage

import Navbar from "./Navbar"
import footprints from "../images/footprints.webp"
import { Button } from "react-bootstrap/Button";
import { Link } from "react-router-dom"

// As an unregistered visitor I want to:
// -see a Sign Up/Sign In form in the header/footer, on a tab (with or without matching route) or in a modal
// -be able to sign up for a new account with valid username/password combination
// -see meaningful messages if there are errors during registration, so that I may correct them
// -see tabbed navigation for Routines and Activities (with matching routes)(DONE)

// As a registered user I want to:
// -be able to log in with my username/password combination
// -see meaningful messages if there are errors during login, so that I may correct them
// -stay logged in between page visits (for example, if I close my browser, and come back later)
// -be able to log out if I am logged in
// -see tabbed navigation for Routines, My Routines (once logged in), and Activities (with matching routes)

const Home = () => {

    return (
        <div id="home">
            <Navbar/>
            <h1>Welcome to Fitness Tracker</h1>
            <img src={footprints} alt="footprints"/>
            <Button>Routines</Button>
            <Button>Activities</Button>
            <footer>
                <Link to="/register">Sign Up for FREE today!!</Link>
            </footer>
        </div>
    )
}

export default Home;
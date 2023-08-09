//make a homepage
import footprints from "../images/footprints.webp";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";

// As an unregistered visitor I want to:
// -see a Sign Up/Sign In form in the header/footer, on a tab (with or without matching route) or in a modal(DONE)
// -be able to sign up for a new account with valid username/password combination(DONE)
// -see meaningful messages if there are errors during registration, so that I may correct them
// -see tabbed navigation for Routines and Activities (with matching routes)(DONE)

// As a registered user I want to:
// -be able to log in with my username/password combination(DONE)
// -see meaningful messages if there are errors during login, so that I may correct them
// -stay logged in between page visits (for example, if I close my browser, and come back later)(DONE)
// -be able to log out if I am logged in(DONE)
// -see tabbed navigation for Routines, My Routines (once logged in), and Activities (with matching routes)(DONE)

const Home = () => {
  return (
    <Container fluid>
      <h1>Welcome to Fitness Tracker</h1>
      <img src={footprints} alt="footprints" height="20px" />
      <Button as={Link} to="/routines" variant="primary" className="mr-2 mt-4">
        View Routines
      </Button>
      <Button as={Link} to="/activities" variant="primary" className="mt-4">
        View Activities
      </Button>

      <footer className="mt-5 text-center">
        <p>
          Don't have an account?{" "}
          <Button as={Link} to="/register" variant="primary">
            Sign Up
          </Button>
        </p>
      </footer>
    </Container>
  );
};

export default Home;

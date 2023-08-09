// As a registered user on the My Routines tab, I want to:
// -be shown a form to create a new routine
// -the form should have text fields for name and goal
// -for each routine which is owned by me I should
// --be able to update the name and goal for the routine
// --be able to delete the entire routine
// --be able to add a routine to a routine via a small form which has a dropdown for all MyRoutines, and inputs for count and duration
// --be able to update the duration or count of any routine on the routine
// --be able to remove any routine from the routine

// STRETCH GOALS

// As a registered user, on the My Routines tab, I want to:
// -expect the dropdown to add an routine to one of my routines not to include any routine which is already a part of the routine

import { useEffect, useState } from "react";
import { personalRoutineData } from "../helpers/apiCalls";
import { Card, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export const MyRoutines = ({ token, username, setUsername }) => {
  const [MyRoutines, setMyRoutines] = useState([]);
  const [addRoutine, setAddRoutine] = useState(false);

  const history = useHistory();

  const handleAddMyRoutines = () => {
    history.push("/MyRoutines/Add");
  };

  const checkToken = () => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setAddRoutine(true);
    }
  };

  useEffect(() => {
    checkToken();
    personalRoutineData(token, username);
  }, [token]);

  return (
    <>
      {addRoutine === true && (
        <Button onClick={handleAddMyRoutines}>Add Routine</Button>
      )}
      {MyRoutines && (
        <Container>
          {MyRoutines.map((routine) => (
            <Card key={routine._id}>
              <Card.Body>
                <Card.Title>{routine.name}</Card.Title>
                <Card.Text>{routine.description}</Card.Text>
                <Card.Text>{routine.duration}</Card.Text>
                <Card.Text>{routine.count}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Container>
      )}
    </>
  );
};

export default MyRoutines;

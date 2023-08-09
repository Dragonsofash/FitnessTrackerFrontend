// As any user on the Routines tab, I want to:
// -see a list of all public routines showing:
// --The routine name, goal, and creator's username(DONE)
// --A list of activities for the routine, including their name, description, and duration and/or count(DONE)

// STRETCH GOALS
// As any user on the Routines tab, I want to:
// -be able to click on a username (shown as a Routine creator), and see a list of all of their public routines
// -be able to click on an activity name (shown in a list of activities on a routine), and see a list of all public routines which feature it

import { useEffect, useState } from "react";
import { myRoutineData } from "../helpers/apiCalls";
import { Button, Card, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";

const Routines = ({ token, isLoggedIn }) => {
  const [routines, setRoutines] = useState([]);
  const [addRoutines, setAddRoutines] = useState(false);

  const history = useHistory();

  const handleRoutines = () => {
    history.push("/Routines/MyRoutines");
  };

  const checkToken = () => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setAddRoutines(true);
    } else {
      setAddRoutines(false);
    }
  };

  useEffect(() => {
    myRoutineData(setRoutines);
    checkToken();
  }, [token]);

  return (
    <Container>
      <h2>Routines</h2>
      {/* {addRoutines === true && (
        <Button onClick={handleRoutines}>My Routines</Button>
      )} */}
      <div>
        {routines.map((routine) => (
          <Card key={routine._id} className="mb-3">
            <Card.Body>
              <Card.Title>
                {routine.name} || {routine.creatorName}
              </Card.Title>
              <Card.Text>Goal: {routine.goal}</Card.Text>
              <Card.Text>Activities:</Card.Text>
              <ul>
                {routine.activities.map((activity) => (
                  <li key={activity.id}>
                    <h4>{activity.name}</h4>
                    <p>{activity.description}</p>
                    <p>{activity.duration}</p>
                    <p>{activity.count}</p>
                  </li>
                ))}
              </ul>
              {isLoggedIn && (
                <>
                  <Button variant="primary" className="mr-2">
                    Add to My Routines
                  </Button>
                </>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
      {isLoggedIn && (
        <Link to="/create-routine">
          <Button variant="success">Create New Routine</Button>
        </Link>
      )}
    </Container>
  );
};

export default Routines;

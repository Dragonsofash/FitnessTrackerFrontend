// As a registered user on the My Routines tab, I want to:
// -be shown a form to create a new routine(DONE)
// -the form should have text fields for name and goal(DONE)

// -for each routine which is owned by me I should:
// --be able to update the name and goal for the routine(DONE)
// --be able to delete the entire routine(DONE)
// --be able to add an activity to a routine via a small form which has a dropdown for all MyRoutines, and inputs for count and duration
// --be able to update the duration or count of any activity on the routine
// --be able to remove any activity from the routine

// STRETCH GOALS

// As a registered user, on the My Routines tab, I want to:
// -expect the dropdown to add an routine to one of my routines not to include any routine which is already a part of the routine

import { useEffect, useState } from "react";
import { deleteRoutine, personalRoutineData } from "../helpers/apiCalls";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export const MyRoutines = ({
  token,
  username,
  setUsername,
  goal,
  setGoal,
  name,
  setName,
  id,
  setId,
}) => {
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

  const editRoutineButton = (routine) => {
    setName(routine.name);
    setGoal(routine.goal);
    setId(routine.id);
    console.log(id);
    history.push("/EditRoutine");
  };

  useEffect(() => {
    checkToken();
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
    personalRoutineData(token, username, setMyRoutines);
  }, [setUsername, token, username]);

  return (
    <>
      <h1>Ready to get to Work, {username}?</h1>
      <Button onClick={handleAddMyRoutines}>Add Routine</Button>
      {MyRoutines.map((routine) => (
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
            <Button onClick={() => editRoutineButton(routine)}>Edit</Button>
            <Button onClick={() => deleteRoutine(token, id)}>Delete</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default MyRoutines;

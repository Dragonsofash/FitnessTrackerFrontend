import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  myActivityData,
  createRoutine,
  AddActivityToRoutine,
} from "../helpers/apiCalls";
import { Button, Container, Dropdown, Form } from "react-bootstrap";

const AddRoutines = ({ token }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [activities, setActivities] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const history = useHistory();

  useEffect(() => {
    myActivityData().then((activities) => {
      setActivities(activities);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setName("");
    setGoal("");
    createRoutine(name, goal, token);
    history.push("/Routines");
  };

  const handleAddActivity = (activityId) => {
    setSelectedActivities([...selectedActivities, activityId]);
  };

  return (
    <Container>
      <h2>Create New Routine</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Routine Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Goal</Form.Label>
          <Form.Control
            type="text"
            placeholder="Goal"
            value={goal}
            onChange={(event) => {
              setGoal(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Select Activities</Form.Label>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">Add Activity</Dropdown.Toggle>
            <Dropdown.Menu>
              {activities.map((activity) => (
                <Dropdown.Item
                  key={activity.id}
                  onClick={() => handleAddActivity(activity.id)}
                >
                  {activity.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>

        <Button variant="succes" onClick={handleSubmit}>
          Create Routine
        </Button>
      </Form>

      <button type="submit">Submit</button>
    </Container>
  );
};

export default AddRoutines;

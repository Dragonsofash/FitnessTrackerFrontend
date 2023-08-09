import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  myActivityData,
  updateRoutine,
} from "../helpers/apiCalls";
import { Button, Container, Dropdown, Form } from "react-bootstrap";

const EditRoutine = ({ token, goal, setGoal, name, setName, id, setId }) => {
  const [activities, setActivities] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const history = useHistory();

  useEffect(() => {
    myActivityData(setActivities);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRoutine(name, goal, token);
    setName("");
    setGoal("");
    history.push("/Routines/MyRoutines");
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

        {/* <Form.Group>
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
        </Form.Group> */}

        <Button variant="primary" onClick={handleSubmit}>
          Create Routine
        </Button>
      </Form>
    </Container>
  );
};

export default EditRoutine;

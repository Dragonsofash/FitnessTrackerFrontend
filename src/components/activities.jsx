//As an unregistered visitor on the Activities tab, I want to:
// -see a list of all activities which have been created(DONE)

// As a registered user on the Activities tab, I want to:
// -be shown a form to create a new activity (by name and description)(DONE)
// -be shown an error if the activity already exists

// STRETCH GOALS
// As any user on the Activities tab, I want to:
// -be able to click on an activity name and see a list of all public routines which feature it

// As a registered user on the Activities tab, I want to:
// -be able to edit an existing activity, and update the description, regardless of who owns it

import { useEffect, useState } from "react";
import { myActivityData } from "../helpers/apiCalls";
import { Card, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export const Activities = ({ token }) => {
  const [activities, setActivities] = useState([]);
  const [addActivity, setAddActivity] = useState(false);

  const history = useHistory();

  const handleAddActivities = () => {
    history.push("/Activities/Add");
  };

  const checkToken = () => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      console.log(addActivity);
      setAddActivity(true);
    }
  };

  useEffect(() => {
    myActivityData(setActivities);
    checkToken();
  }, [token]);

  return (
    <>
      {addActivity === true && (
        <Button onClick={handleAddActivities}>Add activity</Button>
      )}
      {activities && (
        <Container>
          {activities.map((activity) => (
            <Card key={activity._id}>
              <Card.Body>
                <Card.Title>{activity.name}</Card.Title>
                <Card.Text>{activity.description}</Card.Text>
                <Card.Text>{activity.duration}</Card.Text>
                <Card.Text>{activity.count}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Container>
      )}
    </>
  );
};

export default Activities;

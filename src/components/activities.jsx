//As an unregistered visitor on the Activities tab, I want to:
// -see a list of all activities which have been created(DONE)

// As a registered user on the Activities tab, I want to:
// -be shown a form to create a new activity (by name and description)
// -be shown an error if the activity already exists

// STRETCH GOALS
// As any user on the Activities tab, I want to:
// -be able to click on an activity name and see a list of all public routines which feature it

// As a registered user on the Activities tab, I want to:
// -be able to edit an existing activity, and update the description, regardless of who owns it

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { myActivityData } from "../helpers/apiCalls";
import { Card, Container } from "react-bootstrap";

export const Activities = ({ token }) => {
  const [activities, setActivities] = useState([]);
  const [addActivity, setAddActivity] = useState(false);

  //   const checkToken = () => {
  //     if (token.length > 0) {
  //       setAddActivity(true);
  //     }
  //   };

  useEffect(() => {
    myActivityData(setActivities);
    // checkToken();
  }, []);
  //[token] add that later

  return (
    <>
      {addActivity === true && <Link to="/Activities/Add">Add activity</Link>}
      {activities.length > 0 && (
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

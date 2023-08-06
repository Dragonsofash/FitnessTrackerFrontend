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
        <div>
          {activities.map((activity) => (
            <div key={activity._id}>
              <h3>{activity.name}</h3>
              <p>{activity.description}</p>
              <p>{activity.duration}</p>
              <p>{activity.count}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Activities;

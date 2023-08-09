const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api";

const registerUser = async (username, password, setToken) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

const login = async (username, password, setToken) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const result = await response.json();
    console.log(result);
    setToken(result.token);
    return result;
  } catch (err) {
    console.error(err);
  }
};

const myActivityData = async (setActivities) => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    setActivities(result.reverse());
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

const myRoutineData = async (setRoutines) => {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    setRoutines(result.reverse());
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

const createRoutine = async (token, setSuccess, name, goal) => {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: "Long Cardio Routine",
        goal: "To get your heart pumping!",
        isPublic: true,
      }),
    });
    const result = await response.json();
    result.success ? setSuccess(true) : setSuccess(false);
    return result;
  } catch (err) {
    console.error(err);
  }
};

const updateRoutine = async (id, token, setSuccess, name, goal) => {
  try {
    const response = await fetch(`${BASE_URL}/routines/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: "Long Cardio Day",
        goal: "To get your heart pumping!",
      }),
    });
    const result = await response.json();
    result.success ? setSuccess(true) : setSuccess(false);
    return result;
  } catch (err) {
    console.error(err);
  }
};

const postActivity = async (name, description, token) => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        description,
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

const personalRoutineData = async (token, username) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}/routines`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export {
  BASE_URL,
  registerUser,
  login,
  myActivityData,
  myRoutineData,
  createRoutine,
  updateRoutine,
  postActivity,
  personalRoutineData,
};

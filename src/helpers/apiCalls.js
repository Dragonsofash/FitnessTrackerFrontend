/* eslint-disable no-unused-expressions */
const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api";

const registerUser = async (
  username,
  password,
  setToken,
  setLoggedIn,
  setSuccess,
  setError
) => {
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

const checkForAccount = async (username) => {
  try {
    const response = await fetch(`${BASE_URL}/users?username=${username}`);
    const data = await response.json();
    return data.users.length > 0;
  } catch (err) {
    console.error(err);
    return false;
  }
};

const login = async (
  username,
  password,
  setLoggedIn,
  setToken,
  setSuccess,
  setError
) => {
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
    // eslint-disable-next-line no-unused-expressions
    !result.success ? setError(result.error.message) : null;
    // eslint-disable-next-line no-unused-expressions
    result.data.token ? setLoggedIn(true) && setSuccess(true) : null;
    setToken(result.data.token);
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

const createRoutine = async (token, setSuccess) => {
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

const updateRoutine = async (id, token, setSuccess) => {
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

export {
  BASE_URL,
  registerUser,
  checkForAccount,
  login,
  myActivityData,
  myRoutineData,
  createRoutine,
  updateRoutine,
};

const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api";

const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

const login = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    const tok = result.data.token;
    localStorage.setItem("token", tok);
    console.log("loginResponse", `localStorage set with token value: ${tok}`);
    return result;
  } catch (err) {
    console.error(err);
  }
};

const myActivityData = async (setActivities) => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();
    setActivities(result.reverse());
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}

const myRoutineData = async (setRoutines) => {
  try {
  const response = await fetch(`${BASE_URL}/routines`, {
    headers: {
    'Content-Type': 'application/json',
    },
  });
  
  const result = await response.json();
  setRoutines(result.reverse());
  console.log(result);
  return result
  } catch (err) {
  console.error(err);
  }
}

export { BASE_URL, registerUser, login, myActivityData, myRoutineData };

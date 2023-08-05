const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api";

//base for other helpers
const someFunction = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/someEndPoint`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        /* whatever things you need to send to the API */
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

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

export { BASE_URL, registerUser, login };

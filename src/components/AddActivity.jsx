import { useState } from "react";
import { useHistory } from "react-router-dom";
import { postActivity } from "../helpers/apiCalls";

export const AddActivity = ({ token }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    setName("");
    setDescription("");
    postActivity(name, description, token);
    history.push("/Activities");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>New Activity</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddActivity;

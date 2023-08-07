import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createRoutine, updateRoutine } from ".../helpers/apiCalls.jsx"
import { Form } from 'react-bootstrap';

const RoutineForm = ({token, setName, name, setGoal, goal, id}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [success, setSuccess] = useState(undefined);
  const [edit, setEdit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    createRoutine(name, goal, token, setSuccess);
    setName("");
    setGoal("");
  };

  const editPost = (e) => {
    e.preventDefault();
    updateRoutine(id, token, name, goal, setSuccess);
    setName("");
    setGoal("");
    setEdit(false);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create Routine
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Routine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {edit ? <h2>Edit Your Posting </h2> : <h2>Make a New Post</h2>}
          <Form onSubmit={edit ? editPost : handleSubmit}>
            <Form.Group></Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={createRoutine}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RoutineForm;
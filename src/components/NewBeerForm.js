import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

function NewBeerForm(props) {

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    props.onNewBeerCreation({
      name: event.target.name.value,
      type: event.target.type.value,
      bottles: Number(event.target.quantity.value),
      id: v4()
    });
  }

  return (
    <React.Fragment>
    <Form onSubmit={handleNewBeerFormSubmission}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" id="name" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Type</Form.Label>
        <Form.Control type="text" id="type" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Number of Bottles</Form.Label>
        <Form.Control type="number" id="quantity"></Form.Control>
      </Form.Group>
      <br />
      <Button type="submit" variant="info">Add Drink</Button>
    </Form>
    <br />
  </React.Fragment>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
}

export default NewBeerForm;
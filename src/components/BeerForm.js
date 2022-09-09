import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function BeerForm(props) {

  function handleBeerFormSubmission(event) {
    event.preventDefault();
    props.onNewBeerCreation({
      name: event.target.name.value,
      type: event.target.type.value,
      walls: event.target.quantity.value,
      bottles: event.target.quantity.value * 99,
      id: v4()
    });
  }

  return (
    <Form onSubmit={handleBeerFormSubmission}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Drink Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="type">
        <Form.Label>Drink Type</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="quantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="number" />
      </Form.Group>
      <Button type="submit">Submit Drink</Button>
    </Form>
  );
}

BeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
}

export default BeerForm;
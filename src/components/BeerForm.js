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
      yype: event.target.type.value,
      walls: event.target.quantity.value,
      bottles: event.target.quantity.value * 99
    });
  }

  return (
    <Form onSubmit={handleBeerFormSubmission}>
      <Form.group controlId="name">
        <Form.Label>Drink Name</Form.Label>
        <Form.Control type="text" />
      </Form.group>
      <Form.Group>
        <Form.Label>Drink Type</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="number" />
      </Form.Group>
    </Form>
  );
}

BeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
}

export default BeerForm;
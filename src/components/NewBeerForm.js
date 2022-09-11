import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

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
    <form onSubmit={handleNewBeerFormSubmission}>
      <input
        type="text"
        name="name"
        placeholder="Drink Name" />
      <input
        type="text"
        name="type"
        placeholder="Drink Type" />
      <input
        type="text"
        name="quantity"
        placeholder="How many bottles?" />
      <Button type="submit" variant="info">Add Drink</Button>
    </form>
  </React.Fragment>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
}

export default NewBeerForm;
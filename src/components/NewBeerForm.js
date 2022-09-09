import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ReusableForm from "./ReusableForm";

function NewBeerForm(props) {

  function handleNewBeerFormSubmission(event) {
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
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewBeerFormSubmission}
        buttonText="Add Drink" />
    </React.Fragment>
  );
}

BeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
}

export default NewBeerForm;
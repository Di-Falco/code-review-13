import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditBeerForm(props) {

  function handleEditBeerFormSubmission(event) {
    event.preventDefault();
    props.onEditBeer({name: event.target.name.value, type: event.target.type.value, walls: event.target.quantity.value, bottles: event.target.quantity.value * 99})
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditBeerFormSubmission}
        buttonText="Update Drink" />
    </React.Fragment>
  );
}

EditBeerForm.propTypes = {
  beer: PropTypes.object,
  onEditBeer: PropTypes.func
}

export default EditBeerForm;
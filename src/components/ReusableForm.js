import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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
          placeholder="How many walls?" />
        <Button type="submit">{ props.buttonText }</Button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;
import React from "react";
import PropTypes from "prop-types";

function EditBeerForm(props) {
  const { beer } = props;

  return (
    <React.Fragment>
      <h1>{beer.bottles - 1} bottles of {beer.type} on the wall</h1>
    </React.Fragment>
  );
}

EditBeerForm.propTypes = {
  beer: PropTypes.object
}

export default EditBeerForm;
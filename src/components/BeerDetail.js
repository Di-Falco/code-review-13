import React from "react";
import PropTypes from "prop-types";

function BeerDetail(props) {
  const { beer } = props;

  return (
    <React.Fragment>
      <h2>{beer.name} Details</h2>
      <h5>{beer.type}</h5>
      <h5>{beer.bottles % 99 } bottles of beer on {}</h5>
    </React.Fragment>
  )
}

BeerDetail.propTypes = {
  beer: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default BeerDetail;
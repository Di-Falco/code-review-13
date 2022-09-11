import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

function BeerDetail(props) {
  const { beer } = props;

  return (
    <React.Fragment>
      <div  className="mb-3">
        <h2>{beer.name} Details</h2>
        <h5>{beer.type}</h5>
        <h5>{beer.bottles} bottles of beer on the wall</h5>
        <Button onClick={() => props.OnClickingEdit(beer.id)} variant="info">Take one down, pass it around</Button>
        <br />
      </div>
    </React.Fragment>
  )
}

BeerDetail.propTypes = {
  beer: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default BeerDetail;
import React from "react";
import Beer from "./Beer";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

function BeerList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.beerList.map((beer, index) =>
        <Beer name={Beer.Name}
              type={beer.Type}
              quantity={beer.Quantity}
              bottles={beer.Quantity * 99} 
              onClickingDelete={props.onClickingDelete} />
        )}
        <Button>{props.buttonText}</Button>
    </React.Fragment>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array
};

export default BeerList;
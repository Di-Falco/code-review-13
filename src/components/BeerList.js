import React from "react";
import Beer from "./Beer";
import PropTypes from "prop-types";

function BeerList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.beerList.map((beer) =>
        <Beer name={beer.Name}
          type={beer.Type}
          quantity={beer.Quantity}
          bottles={beer.Quantity * 99} 
          onClickingDelete={props.onClickingDelete}
          id={beer.id}
          key={beer.id} />
        )}
    </React.Fragment>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array,
  onClickingDelete: PropTypes.func
};

export default BeerList;
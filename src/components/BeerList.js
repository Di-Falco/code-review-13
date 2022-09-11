import React from "react";
import Beer from "./Beer";
import PropTypes from "prop-types";

function BeerList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.beerList.map((beer) =>
        <Beer 
          name={beer.name}
          type={beer.type}
          walls={beer.walls}
          bottles={Number(beer.walls) * 99} 
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
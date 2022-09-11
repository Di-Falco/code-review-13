import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Form from"react-bootstrap/Form"

function BeerDetail(props) {
  const { beer } = props;

  function handleEditBeer(event){
    event.preventDefault();
    props.onEditBeer({name: beer.name, type: beer.type, bottles: beer.bottles-1, id: beer.id});
  }

  return (
    <React.Fragment>
      <div  className="mb-3">
        <h2>{beer.name}</h2>
        <h5>{beer.bottles} bottles of {beer.type} on the wall</h5>
        <Form onSubmit={ handleEditBeer }>
          <Button type="submit" variant="info">Take one down, pass it around</Button>
        </Form>
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
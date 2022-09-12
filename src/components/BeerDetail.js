import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Form from"react-bootstrap/Form"

function BeerDetail(props) {
  const { beer } = props;
  const [counter, setCounter] = useState(beer.bottles)

  function handleEditBeer(event){
    event.preventDefault();
    props.onEditBeer({name: beer.name, type: beer.type, bottles: counter, id: beer.id});
  }

  return (
    <React.Fragment>
      <div  className="mb-3">
        <h2>{beer.name}</h2>
        <h5>{counter} bottles of {beer.type} on the wall</h5>
        <Form onSubmit={ handleEditBeer }>
          <Button onClick={() => setCounter(counter-1)} className="mb-3" variant="info">Take one down</Button>
          <br />
          <Button type="submit" variant="info">Pass it around</Button>
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
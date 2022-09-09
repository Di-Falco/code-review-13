import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

function Beer(props) {

  const BeerButton = () => {
    <Dropdown as={ButtonGroup}>
      <Button>{props.name}</Button>
      <Dropdown.Toggle split id="dropdown-split-basic" />
      <Dropdown.Menu>
        <Dropdown.Item onClick={ props.onClickingDelete }>Edit Drink</Dropdown.Item>
        <Dropdown.Item>Delete Drink</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  }

  return (
    <React.Fragment>
      <BeerButton />
      <br />
    </React.Fragment>
  );
}

Beer.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  walls: PropTypes.number,
  bottles: PropTypes.number
}

export default Beer;
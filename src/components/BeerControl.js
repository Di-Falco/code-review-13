import React from "react";
import BeerForm from "./BeerForm";
import BeerList from "./BeerList";
import Button from "react-bootstrap/Button";

class BeerControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainBeerList: []
    };
  }

  handleAddingNewBeerToList = (newBeer) => {
    const newMainBeerList = this.state.mainBirdList.concat(newBeer);
    this.setState({mainBeerList: newMainBeerList,
                  formVisibleOnPage: false});
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render() {
    let currentlyVisibleState = null;
    if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <BeerForm onNewBeerCreation={this.handleAddingNewBeerToList} />
    } else {
      currentlyVisibleState = <BeerList beerList={this.state.mainBeerList} />
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Button onClick={this.handleClick}>Add New Drink to Inventory</Button>
      </React.Fragment>
    );
  }

}

export default BeerControl;
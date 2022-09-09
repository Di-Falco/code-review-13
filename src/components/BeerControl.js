import React from "react";
import NewBeerForm from "./NewBeerForm";
import EditBeerForm from "./EditBeerForm";
import BeerList from "./BeerList";
import BeerDetail from "./BeerDetail";
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
    const newMainBeerList = this.state.mainBeerList.concat(newBeer);
    this.setState({mainBeerList: newMainBeerList,
                  formVisibleOnPage: false});
  }

  handleClick = () => {
    if (this.state.selectedBeer != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBeer: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditBeerForm beer = {this.state.selectedBeer}
        onEditBeer = {this.handleEditingBeerInList} />;
      buttonText = "Return to Drink List";
    } else if (this.state.selectedBeer != null) {
      currentlyVisibleState = <BeerDetail beer = {this.state.selectedBeer}
        onClickingDelete = {this.handleDeletingBeer}
        onClickingEdit = {this.handleEditClick} />;
        buttonText = "Return to Drink List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBeerForm onNewBeerCreation={this.handleAddingNewBeerToList} />;
      buttonText = "Submit Drink";
    } else {
      currentlyVisibleState = <BeerList beerList={this.state.mainBeerList}
      onBeerSelection = {this.handleChangingSelectedBeer}
      onClickingDelete = {this.handleDeletingBeer} />;
      buttonText = "Add Drink";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Button onClick={this.handleClick}>{buttonText}</Button>
      </React.Fragment>
    );
  }

}

export default BeerControl;
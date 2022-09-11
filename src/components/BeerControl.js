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
      mainBeerList: [],
      selectedBeer: null,
      editing: false
    };
  }

  handleEditingBeerInList = (beerToEdit) => {
    const editedMainBeerList = this.state.mainBeerList
      .filter(beer => beer.id !== this.state.selectedBeer.id)
      .concat(beerToEdit);
    this.setState({
      mainBeerList: editedMainBeerList,
      editing: true
    });
  }

  handleEditClick = () => {
    this.setState({editing:true});
  }

  handleDeletingBeer = (id) => {
    const newMainBeerList = this.state.mainBeerList.filter(beer => beer.id !== id);
    this.setState({
      mainBeerList: newMainBeerList,
      selectedBeer: null
    });
  }

  handleChangingSelectedBeer = (id) => {
    const selectedBeer = this.state.mainBeerList.filter(beer => beer.id === id)[0];
    this.setState({selectedBeer: selectedBeer});
  }

  handleAddingNewBeerToList = (newBeer) => {
    const newMainBeerList = this.state.mainBeerList.concat(newBeer);
    this.setState({mainBeerList: newMainBeerList,
                  formVisibleOnPage: false});
  }

  handleClick = () => {
    if (this.state.editing) {
      this.setState({
        editing: false,
        selectedBeer: null
      });
    } else if (this.state.selectedBeer != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBeer: null
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
      currentlyVisibleState = <EditBeerForm beer = {this.state.selectedBeer} />;
      buttonText = "Return to Drink List";
    } else if (this.state.selectedBeer != null) {
      currentlyVisibleState = <BeerDetail beer = {this.state.selectedBeer}
        onClickingDelete = {this.handleDeletingBeer}
        onEditBeer = {this.handleEditingBeerInList} />;
        buttonText = "Return to Drink List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBeerForm onNewBeerCreation={this.handleAddingNewBeerToList} />;
      buttonText = "Return to Drink List";
    } else {
      currentlyVisibleState = <BeerList beerList={this.state.mainBeerList}
        onBeerSelection = {this.handleChangingSelectedBeer}
        onClickingDelete = {this.handleDeletingBeer} />;
      buttonText = "Add Drink";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Button onClick={this.handleClick} variant="info">{buttonText}</Button>
      </React.Fragment>
    );
  }

}

export default BeerControl;
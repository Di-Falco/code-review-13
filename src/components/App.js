import React from "react";
import BeerControl from "./BeerControl";
import Header from "./Header";
import { Container } from "react-bootstrap";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <BeerControl />
      </Container>
    </React.Fragment>
  );
}

export default App;
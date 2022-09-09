import React from "react";
import BeerControl from "./BeerControl";
import Header from "./Header";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div class="container">
        <BeerControl />
      </div>
    </React.Fragment>
  );
}

export default App;
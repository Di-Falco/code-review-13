import React from "react";
import BeerControl from "./BeerControl";
import Header from "./Header";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <BeerControl />
      </div>
    </React.Fragment>
  );
}

export default App;
import React, { Component } from "react";
import Weather from "./Weather";
import BurgerMenu from "./BurgerMenu";

class App extends Component {

  render() {
    return (
        <div>
          <BurgerMenu />
          <Weather />
        </div>
    );
  }
}
export default App;
import React, { Component } from "react";
import Example from "./BurgerMenu";
import Weather from "./Weather";

class App extends Component {
  render() {
    return (
      <div>
        <Example />
        <Weather />
      </div>
    );
  }
}
export default App;
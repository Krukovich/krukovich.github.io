import React, { Component } from "react";
import Weather from "./Weather";
import BurgerMenu from "./BurgerMenu";
import "../css/menu.css";
import "../css/main.css";
import "../fontello/css/fontello.css"

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
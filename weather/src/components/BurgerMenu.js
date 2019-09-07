import React, { Component } from "react";
import { elastic as Menu } from 'react-burger-menu';
import "../css/menu.css";

class Example extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
  
  render () {

    return (
      <div id="outer-container">
      <Menu right pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <main id="page-wrap" />
          <a id="home" className="menu-item" href="#">Start</a>
          <button onClick={ this.showSettings }>Settings</button>
      </Menu>
    </div>  
    );
  }
}

export default Example
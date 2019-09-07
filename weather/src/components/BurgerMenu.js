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
          <a id="home" className="menu-item" href="/">Выбрать город</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    </div>  
    );
  }
}

export default Example
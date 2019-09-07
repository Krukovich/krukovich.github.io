import React, { Component } from "react";

class Weather extends Component {

  componentDidMount() {
    let request = new XMLHttpRequest();
    request.open("GET", "krukovich.github.io/weather/src/data/city.json", true);
    request.send();
    request.onreadystatechange = function() {
        let response = request.responseText;   
        console.log(response);
        }
    }
  
  render () {
    return (
        <div>
        </div>  
    );
  }
}

export default Weather;
import React, { Component } from "react";
import "../css/main.css"

class CityData extends Component {
  constructor(props) {
    super(props);
    this.state = {
        result: "",
        temp: "0",
        tempMax: "0",
        tempMin: "0",
        name: "",
        pressure: "0",
        wind: "0",
        description: ""
    };
  }
  
  getCityName() {
    const data = require("../data/data.json");
    let city = document.getElementById("city");
    let cityName = city.value;
    if (cityName != "") {
      let normalizeName = this.normalizeValue(cityName);
      let result = {};
      data.forEach(city => {
        if (city.name === normalizeName) {
          result.id = city.id;
          result.name = city.name;
        }
      });
      this.showButtonResult();
      this.getData(result);
    } else {
      alert("Поле название города пустое!");
    }
  }

  showButtonResult() {
    let btn = document.getElementById("button-result");
    btn.style.display = "block";
  }

  normalizeValue(value) {
    let str = value.toLowerCase(),
        arrStr = str.split(""),
        firstCharUp = arrStr[0].toUpperCase();
        arrStr[0] = firstCharUp;
    let newStr = arrStr.join("");
    return newStr;
  }

  async getData(result) {
    let cityId = result.id;
    let url = "https://api.openweathermap.org/data/2.5/group?id=" + cityId + "&units=metric&APPID=216ac8952d174875f2b0182d8ff16394";
    let response = await fetch(url);
    let data = await response.json();
    this.setState({
        result: data
    });
    localStorage.removeItem("cityData");
    var serialObj = JSON.stringify(data);
    localStorage.setItem("cityData", serialObj);
  }

  render() {
    return (
      <div className="input-block">
        <input id="city" type="text" placeholder="Введите город" />
        <a id="button-search" onClick={this.getCityName.bind(this)}>Поик города</a>
      </div>
    );
  }
}
export default CityData;
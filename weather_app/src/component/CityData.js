import React, { Component } from "react";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
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
      let options = this.selectSearchOption();
      this.showButtonResult();
      this.getData(result, options);
    } else {
      alert("Поле название города пустое!");
    }
  }

  selectSearchOption() {
    let form = document.forms.selectWeatherBtn;
    let selectOption = "";
    let formsItem = form.elements.options;
        formsItem.forEach(function(item) {
          if (item.checked === true) {
            selectOption = item.id;
          }
        });
    return selectOption;
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

  async getData(result, options) {
    if (!(result.name)) {
      alert("Город не найден");
    } else {
      let cityId = result.id,
      selectOption = options,
      url = "";
    if (selectOption === "weather_week") {
      url = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityId + "&lang=ru&units=metric&APPID=216ac8952d174875f2b0182d8ff16394";
    } else {
      url = "https://api.openweathermap.org/data/2.5/group?id=" + cityId + "&lang=ru&units=metric&APPID=216ac8952d174875f2b0182d8ff16394";
    }
      let response = await fetch(url);
      let data = await response.json();
      this.setState({
          result: data
      });
      localStorage.removeItem("cityData");
      var serialObj = JSON.stringify(data);
      localStorage.setItem("cityData", serialObj);
    }
  }

  render() {
    return (
      <div className="input-block">
        <InputGroup size="lg">
          <FormControl  id="city" placeholder="Введите город" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <span className="span-btn" id="button-search" onClick={this.getCityName.bind(this)}><i className="icon-search" id="search-icon"/>Поиcк города</span>
      </div>
    );
  }
}
export default CityData;
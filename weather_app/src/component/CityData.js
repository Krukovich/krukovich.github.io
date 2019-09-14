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
  
  async getCityName() {
    let city = document.getElementById("city");
    let tempName = city.value;
    let cityName = await this.checkedNameAndTranslate(tempName);
    if (cityName != "") {
      let normalizeName = this.normalizeValue(cityName);
      let options = this.selectSearchOption();
      this.showButtonResult();
      this.getData(normalizeName, options);
    } else {
      alert("Поле название города пустое!");
    }
  }

  async checkedNameAndTranslate(result) {
    let str = result.match(/[а-яА-ЯЁё]/g);
    if (str) {
      let nameTemp = str.join(""),
          name = this.normalizeValue(nameTemp),
          url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190908T194535Z.4e6dfdc2828c849a.a6231844fce1948640d6465cfddb92ee3269d693&text=" + name + "&lang=ru-en&[format=plain]";
      let response = await fetch(url);
      let data = await response.json();
      return data.text[0];
    } else {
      return result;
    }
  }

  async translatekName(result) {
    if (result) {
      let url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190908T194535Z.4e6dfdc2828c849a.a6231844fce1948640d6465cfddb92ee3269d693&text=" + result + "&lang=en-ru&[format=plain]";
      let response = await fetch(url);
      let data = await response.json();
      return data.text[0];
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

  hiddenButtonResult() {
    setTimeout(function() {
      let btn = document.getElementById("button-result");
      btn.style.display = "none";
    },1000);    
  }

  normalizeValue(value) {
    let str = value.toLowerCase(),
        arrStr = str.split(""),
        firstCharUp = arrStr[0].toUpperCase();
        arrStr[0] = firstCharUp;
    let newStr = arrStr.join("");
    return newStr;
  }

  async getData(normalizeName, options) {
    let flagSort;
    if (!(normalizeName)) {
      alert("Город не найден");
    } else {
      let url = "";
      if (options === "weather_week") {
        flagSort = true;
        url = "https://api.openweathermap.org/data/2.5/forecast?q=" + normalizeName + "&lang=ru&units=metric&APPID=216ac8952d174875f2b0182d8ff16394";
      } else {
        url = "https://api.openweathermap.org/data/2.5/weather?q=" + normalizeName + "&lang=ru&units=metric&APPID=216ac8952d174875f2b0182d8ff16394";
      }
        let response = await fetch(url);
        let data = await response.json();
        if (data.cod != 200) {
          alert(data.message);
          this.hiddenButtonResult(); 
        } else {
          if (flagSort) {
            const dataSort =  this.sortDataOnFiveDays(data);
            let name = await this.translatekName(data.city.name);
            this.putDataInLocalStorage(dataSort, name, flagSort);
          } else {
            let name = await this.translatekName(data.name);
            this.putDataInLocalStorage(data, name, null);
          }
        }
      }    
    }

    putDataInLocalStorage(data, translateName, flagSort) {
      if (flagSort) {
        let obj = {};
        obj.translateName = translateName;
        obj.list = data;
        obj.flagSort = flagSort;
        localStorage.removeItem("cityData");
        let serialObj = JSON.stringify(obj);
        localStorage.setItem("cityData", serialObj);
      } else {
        data.translateName = translateName;
        localStorage.removeItem("cityData");
        let serialObj = JSON.stringify(data);
        localStorage.setItem("cityData", serialObj);
      }    
    }

    sortDataOnFiveDays(data) {
      if (data) {
        let list = data.list,
            result = [],
            str = list[0].dt_txt.substr(8, 2),
            num = Number(str);
        list.forEach(function(item) {
          let tempStr = item.dt_txt.substr(8, 2),
              tempNum = Number(tempStr);
          if (num <= tempStr) {
            result.push(item);
            num += 1;
            if (result.length > 5) {
            result.pop();
            }
          }
        });
        return result;
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
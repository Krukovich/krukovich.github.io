import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { ListGroup} from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
import CityData from "./CityData";
import WeatherFiveDay  from "../component/WeatherFiveDay";

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: "",
            temp: "0",
            tempMax: "0",
            tempMin: "0",
            name: "",
            pressure: "0",
            wind: "0",
            description: ""
        };
      }

    componentDidMount() {
        let mass = [1,2,3],
            item = mass[Math.floor(Math.random()*mass.length)],
            body = document.getElementById("body");

        switch (item) {
            case 1:
                body.className="bodybg1";
                break;
            case 2:
                body.className="bodybg2";
                break;
            case 3:
                body.className="bodybg3";
                break;
            default:
                body.className="bodybg1";
          }
    }

    getDatalocalStorage() {
        const data = JSON.parse(localStorage.getItem("cityData"));
        if (data) {
            if (data.flagSort === true) {
                const dataCity = {
                    list: data.list,
                    cityName: data.translateName
                }
                this.setState({
                    list: dataCity
                });
                let btn = new CityData();
                btn.hiddenButtonResult();  
            } else {
                this.setState({
                    temp: data.main.temp,
                    tempMax: data.main.temp_max,
                    tempMin: data.main.temp_min,
                    name: data.translateName,
                    pressure: data.main.pressure,
                    wind: data.wind.speed,
                    description: data.weather[0].description
                });
                let btn = new CityData();
                btn.hiddenButtonResult();   
            } 
        }
    }

    showWeatherIcon() {
        let icon = this.state.description;
        if (icon === "ясно") {
            return <i className="icon-sun" />;
        } if (icon === "облачно" || icon === "туман" || icon === "слегка облачно") {
            return <i className="icon-cloud" />;
        } if (icon === "дождь" || icon === "легкий дождь") {
            return <i className="icon-rain" />;
        } if (icon === "пасмурно") {
            return <i className="icon-cloud-sun" />;
        } if (icon === "") {
            return <i className="icon-snow" />;
        } if (icon === "") {
            return <i className="icon-cloud-flash" />;
        }    
    }

  render() {
    return (
        <div>
            <WeatherFiveDay data={this.state.list}/>
            <div className="content" id="content">
                <div className="content-block">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Город: {this.state.name}</Card.Title>
                                <div className="weather-icon">{this.showWeatherIcon()}</div>
                                <Card.Text>Описание: {this.state.description}</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem><i className="icon-temperatire" />Температура: {this.state.temp} &#8451;</ListGroupItem>
                            <ListGroupItem><i className="icon-temperatire" />Температура макс.: {this.state.tempMax} &#8451;</ListGroupItem>
                            <ListGroupItem><i className="icon-temperatire" />Температура мин.: {this.state.tempMin} &#8451;</ListGroupItem>
                            <ListGroupItem><i className="icon-temperature" />Давление: {this.state.pressure}</ListGroupItem>
                            <ListGroupItem><i className="icon-wind" />Скорость ветра: {this.state.wind} м/c</ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>
                <CityData />
                <span className="span-btn" id="button-result" onClick={this.getDatalocalStorage.bind(this)}><i className="icon-th-list" id="result-icon"/>Узнать погоду</span>
            </div>
        </div>
    );
  }
}
export default Weather;
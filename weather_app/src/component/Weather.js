import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { ListGroup} from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
import CityData from "./CityData";

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        this.getDatalocalStorage()
    }

    getDatalocalStorage() {
        const data = JSON.parse(localStorage.getItem("cityData"));
        if (data) {
            this.setState({
                temp: data.list[0].main.temp,
                tempMax: data.list[0].main.temp_max,
                tempMin: data.list[0].main.temp_min,
                name: data.list[0].name,
                pressure: data.list[0].main.pressure,
                wind: data.list[0].wind.speed,
                description: data.list[0].weather[0].description
            });
            setTimeout(function() {
                let btn = document.getElementById("button-result");
                btn.style.display = "none";
            },2000);
        }
    }

    showWeatherIcon() {
        let icon = this.state.description;
        if (icon === "ясно") {
            return <i className="icon-sun" />;
        } if (icon === "") {
            return <i className="icon-cloud" />;
        } if (icon === "") {
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
        <div className="content">

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
    );
  }
}
export default Weather;
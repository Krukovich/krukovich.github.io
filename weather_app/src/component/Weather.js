import React, { Component } from "react";
import { Button } from 'react-bootstrap/Button';
import { Card } from "react-bootstrap";
import { ListGroup} from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
import CityData from "./CityData";
import "../css/main.css"

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
        }
    }

  render() {
    return (
        <div className="content">
            <div className="content-block">
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>Город: {this.state.name}</Card.Title>
                    <Card.Text>Описание: {this.state.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Температура: {this.state.temp} &#8451;</ListGroupItem>
                    <ListGroupItem>Температура макс.: {this.state.tempMax} &#8451;</ListGroupItem>
                    <ListGroupItem>Температура мини.: {this.state.tempMin} &#8451;</ListGroupItem>
                    <ListGroupItem>Давление: {this.state.pressure}</ListGroupItem>
                    <ListGroupItem>Скорость ветра: {this.state.wind} m/c</ListGroupItem>
                </ListGroup>
                </Card>
            </div>
            <CityData />
            <button id="button-result" onClick={this.getDatalocalStorage.bind(this)}>Узнать погоду</button>
        </div>
    );
  }
}
export default Weather;
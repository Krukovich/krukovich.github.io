import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: "",
            tempMax: "",
            tempMin: "",
            name: "",
            pressure: "",
            wind: "",
            description: ""
        };
      }
    
    async getData(id) {
        let cityId = id;
        let url = "http://api.openweathermap.org/data/2.5/group?id=" + cityId + "&units=metric&APPID=216ac8952d174875f2b0182d8ff16394";
        let response = await fetch(url);
        let data = await response.json();
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

    startApp() {
        let inputVal = document.getElementById("cityName").value;
        let cityId = '';
        if (inputVal) {
            var json = require('./city.json');
            if (json) {
                json.forEach(item => {
                    if (item.name === inputVal){
                        cityId = item.id;
                    }
                });
                this.getData(cityId);
            } else {
                alert("Данные не пришли");
            }
        } else {
            alert("Введите город");
        }
    }
    
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }} className="weather">
                <Card.Body>
                    <Card.Title>Выбранный город: {this.state.name}</Card.Title>
                </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Температура: {this.state.temp}</ListGroupItem>
                        <ListGroupItem>Температура максимальная: {this.state.tempMax}</ListGroupItem>
                        <ListGroupItem>Температура минимальная: {this.state.tempMin}</ListGroupItem>
                        <ListGroupItem>Давление: {this.state.pressure}</ListGroupItem>
                        <ListGroupItem>Скорость ветра: {this.state.wind}</ListGroupItem>
                    </ListGroup>
                </Card>
                <input type="text" id="cityName"></input>
                <br/>
                <br/>
                <Button variant="primary" onClick={this.startApp.bind(this)}>Узнать погоду</Button>
            </div>
        );
    }

}

export default Weather; 
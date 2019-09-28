import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { ListGroup} from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
import CityData from "./CityData";
import WeatherFiveDay  from "../component/WeatherFiveDay";
import SecondMenu from "./SecondMenu";
import Helper from "../component/helper/Helper";

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
            description: "",
            randomList: ""
        };
      }

    componentWillMount() {
        let helper = new Helper();
        helper.randomBackground();
    }

    componentDidMount() {
        let helper = new Helper();
        let massName = helper.getRandomCityName();
        this.setState({
            randomList: massName
        });

        this.getDatalocalStorage();
    }

    showContent(flagSort) {
        let content = document.getElementById("content");
        let contentFiveDay = document.getElementById("content-block__fiveday");
        
        if(flagSort) {
            content.style.display = "none";
            contentFiveDay.style.display = "flex";
        } else {
            contentFiveDay.style.display = "none";
            content.style.display = "flex";
        }
    }


    getDatalocalStorage() {
        const data = JSON.parse(localStorage.getItem("cityData"));
        if (data) {
            if (data.flagSort === true) {
                this.showContent(true);
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
                this.showContent(false);
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
            <SecondMenu /> 
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
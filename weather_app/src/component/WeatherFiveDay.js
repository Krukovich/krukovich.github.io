import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { ListGroup} from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";

class WeatherFiveDay extends Component {

    showIcon(description) {
        if (description === "ясно") {
            return <i className="icon-sun" />;
        } if (description === "облачно" || description === "туман" || description === "слегка облачно") {
            return <i className="icon-cloud" />;
        } if (description === "дождь" || description === "легкий дождь") {
            return <i className="icon-rain" />;
        } if (description === "пасмурно") {
            return <i className="icon-cloud-sun" />;
        } if (description === "") {
            return <i className="icon-snow" />;
        } if (description === "") {
            return <i className="icon-cloud-flash" />;
        }    
    }

    showDay(day){
        return day.substr(0, 11);
    }

    render() {

        if (this.props.data != "") {
            const cityName = this.props.data.cityName;
            const data = this.props.data.list;
            const list = data.map((item) => {
                return (
                    <div className="content-block__fiveday-item">
                        <div className="content-block">
                            <Card style={{ width: '18rem' }}>
                            <Card.Body>
                            <Card.Title>Город: {cityName}</Card.Title>
                                <div className="weather-icon">{this.showIcon(item.weather[0].description)}</div>
                                <div className="weather-day">{this.showDay(item.dt_txt)}</div>
                                <Card.Text>Описание: {item.weather[0].description}</Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem><i className="icon-temperatire" />Температура: {item.main.temp} &#8451;</ListGroupItem>
                                <ListGroupItem><i className="icon-temperatire" />Температура макс.: {item.main.temp_max} &#8451;</ListGroupItem>
                                <ListGroupItem><i className="icon-temperatire" />Температура мин.: {item.main.temp_min} &#8451;</ListGroupItem>
                                <ListGroupItem><i className="icon-temperature" />Давление: {item.main.pressure}</ListGroupItem>
                                <ListGroupItem><i className="icon-wind" />Скорость ветра: {item.wind.speed} м/c</ListGroupItem>
                            </ListGroup>
                            </Card>
                        </div>
                    </div>
                );
            })
            return (
                <div className="content-block__fiveday" id="content-block__fiveday">
                    {list}
                </div>
            );
        } else {
            return (
                <div className="content-block__fiveday" id="content-block__fiveday">
                </div>
            );
        } 
    }
}
export default WeatherFiveDay;



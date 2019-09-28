import React, { Component } from "react";
import Showrandomcity from "../component/Showrandomcity"
import Helper from "../component/helper/Helper";
import CityData from "../component/CityData";
import { Accordion } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../css/main.css";

class SecondMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randomList: ""
        };
      }
    
    componentWillMount() {
        let helper = new Helper();
        let massName = helper.getRandomCityName();
        this.setState({
            randomList: massName
        });
    }

    componentDidMount() {
        window.addEventListener("click", function(event) {
            if (event.target.className == "ca-main") {
                let cityName = event.target.innerHTML,
                    cityInput = document.getElementById("city");
                cityInput.value = cityName;
                let cityData = new CityData();
                cityData.getCityName();
            }   
        });
    }

    render() {
        return (
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Случайные города
                        </Accordion.Toggle>
                    </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body> <Showrandomcity data={this.state.randomList}/> </Card.Body>
                        </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Последние запросы
                        </Accordion.Toggle>
                    </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        );
    }
}
export default SecondMenu;
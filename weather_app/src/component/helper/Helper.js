import React, { Component } from "react";

class Helper extends Component {

    randomBackground() {
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

    getRandom(min, max){
        return Math.round(Math.random() * (max - min) + min);
    }

    getRandomCityName() {
        const data = require("../../data/current.city.list.min.json");
        let i = 0;
        let result = [];
        while (i < 10 ) {
            const number = this.getRandom(0, data.length);
            result.push(data[number].name);
            i++;
        }
        return result;
    }

    userSelectAndWrite(cityName) {
        let userselectDiv = document.getElementById("userSelected"),
            divs= userselectDiv.childNodes;

        if (divs.length > 0) {
            let divArray = [].slice.call(divs);
            let result = divArray.filter(function(item){
                return item.innerHTML == cityName;
            });
            
            if (result.length  == 0) {
                let div = document.createElement("div");
                div.className = "ca-main";
                div.append(cityName);
                userselectDiv.append(div);
            }
        } else {
            let div = document.createElement("div");
            div.className = "ca-main";
            div.append(cityName);
            userselectDiv.append(div);
        }
    };
}

export default Helper;
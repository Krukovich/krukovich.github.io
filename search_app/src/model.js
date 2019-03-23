'use strict'

let model = {
                                                    // take data from data.json
    getDataServer: function() {
        let request = new XMLHttpRequest();
        request.open("GET", "data/data.json", true);
        request.send();
        request.onreadystatechange = function() {
            let response = request.responseText;
            if (request.readyState == 4) {
                let dataArray = [];
                let data = JSON.parse(response);
                    data.forEach(function(item) {
                        let object = {};
                        object.id = item.id;
                        object.name = item.name;
                        object.age = item.age;
                        object.balance = item.balance;
                        object.gender = item.gender;
                        dataArray.push(object); 
                });
                                                    // put the data in the storage 
                localStorage.setItem("data", JSON.stringify(dataArray));           
            }
        }
    },
                                                     // get data from storage
    getDataLocalStorage: function() {
        let str = localStorage.getItem("data");
        let result = JSON.parse(str);
        return result;
    },
                                                    // output data comparing with ID
    showAllDataUser: function() {
        let result;
        let event = window.event.target;
        let data = model.getDataLocalStorage();
            data.forEach(function(item) {
                if (event.id == item.id) {
                   result = item; 
                }
            });
        return result;     
    },
                                                    // search by value age
    searchInLocalStorageAge: function() {
        let data = model.getDataLocalStorage(),
            age = document.getElementById("age"),
            result = [];
        data.forEach(function(item) {
            if (item.age == age.value) {
                result.push(item);
            }
        });
        return result;
    },
                                                    // search by value gender
    searcInLocalStorageGender: function() {
        let data = model.getDataLocalStorage(),
            gender = document.getElementById("gender"),
            result = [];
        data.forEach(function(item) {
            if (item.gender == gender.value) {
                result.push(item);
            }
        });
        return result;
    },
                                                    // search by value money
    searchInLocalStorageMoney: function() {
        let moneyMin = document.getElementById("moneyMin").value,
            moneyMax = document.getElementById("moneyMax").value,
            data = model.getDataLocalStorage(),
            result = [];
            data.forEach(function(item) {
                if (item.balance > moneyMin && item.balance < moneyMax) {
                    result.push(item);
                }
            });
          return result;  
    }
}

export default model;
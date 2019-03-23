'use strict'

import model from "./model";
import view from "./view";
import { fileURLToPath } from "url";

                                                        // activate the search filter window 
let searcMenu = document.getElementById("filter");
searcMenu.addEventListener("click", function() {
        let searchMenuShow = document.getElementsByClassName("content-left__search");
        searchMenuShow[0].classList.add("content-left__search_show");
        view.showContentItem();
});
                                                        // run the project demo
let startAppDemo = document.getElementById("startDemo");
startAppDemo.addEventListener("click", function() {
        model.getDataServer();
        let result = model.getDataLocalStorage();
        view.clearContentItem();
        view.showContentItem();
        view.showResult(result);
                                                        // show search information
let people = document.getElementById("list");
people.addEventListener("click", function() {
        let userData = model.showAllDataUser();
        view.showInsertItem();
        view.clearAllUserResult();
        view.showAllUserResult(userData);
        });
});
                                                        // start the search by value 
let startSearch = document.getElementById("startSearch");
startSearch.addEventListener("click", function() {
        let result = model.searchInLocalStorage();
        view.clearContentItem();
        view.showContentItem();
        view.showResult(result);                                                     
                                                        // show search information
let people = document.getElementById("list");
people.addEventListener("click", function() {
        let userData = model.showAllDataUser();
        view.showInsertItem();
        view.clearAllUserResult();
        view.showAllUserResult(userData);
        });        
});
                                                        // show search gender
let filterGender = document.getElementById("filterGender");
filterGender.addEventListener("click", function() {
        let result = model.searcInLocalStorageGender();
        view.clearContentItem();
        view.showContentItem();
        view.showResult(result);
                                                        // show search information
let people = document.getElementById("list");
people.addEventListener("click", function() {
        let userData = model.showAllDataUser();
        view.showInsertItem();
        view.clearAllUserResult();
        view.showAllUserResult(userData);
        });

});
                                                        // show search age
let filterAge = document.getElementById("filterAge");
filterAge.addEventListener("click", function() {
        let result = model.searchInLocalStorageAge();
        view.clearContentItem();
        view.showContentItem();
        view.showResult(result);
                                                        // show search information
let people = document.getElementById("list");
people.addEventListener("click", function() {
        let userData = model.showAllDataUser();
        view.showInsertItem();
        view.clearAllUserResult();
        view.showAllUserResult(userData);
        });         
});
                                                        // show search balance
let filterMoney = document.getElementById("filterBalance");
filterBalance.addEventListener("click", function() {
        let data = model.searchInLocalStorageMoney();
        view.clearContentItem();
        view.showContentItem();
        view.showResult(data);
                                                        // show search information
let people = document.getElementById("list");
people.addEventListener("click", function() {
        let userData = model.showAllDataUser();
        view.showInsertItem();
        view.clearAllUserResult();
        view.showAllUserResult(userData);
        });
});                                                      
                                                        // show additional screen of the phone
let zoomDisplay = document.getElementById("people");
zoomDisplay.addEventListener("mouseover", function() {
        view.zoomDisplayIphone();
});
                                                        // hide additional phone screen
let outDisplay = document.getElementById("people");
outDisplay.addEventListener("mouseout", function() {
        view.outDisplayIphone();
});

                                                        // close all
let close = document.getElementById("close");
close.addEventListener("click", function() {
        view.closeAll();
}); 


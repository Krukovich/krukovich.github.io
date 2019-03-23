'use strict'

let view = {
                                                    // display the result on the screen
    showResult: function(data) {
        let insertPlace = document.getElementById("people");
        let elemList = document.createElement("ul");
            elemList.classList.add("people-list");
            elemList.setAttribute("id", "list");
            data.forEach(function(item) {
                let elemItem = document.createElement("li");
                    elemItem.classList.add("people-item");
                    elemItem.append(item.name);
                    elemItem.setAttribute("id", item.id);
                    elemList.append(elemItem);
            });
            insertPlace.append(elemList); 
    },
                                                    // make the block visible 
    showContentItem: function() {
        let contentItem = document.getElementById("content");
            contentItem.setAttribute("style", "display: block");
        let content = document.getElementById("people");
            content.setAttribute("style", "height: 642px");    
    },
                                                    // when hovering add phone screen
    zoomDisplayIphone: function() {
        let display = document.getElementById("zoom");
            display.classList.add("content-right__item_show");
    },
                                                    // hide the phone screen after the cursor is displayed
    outDisplayIphone: function() {
        let display = document.getElementById("zoom");
            display.classList.remove("content-right__item_show")
    },    
                                                    // display the full information
    showAllUserResult: function(data) {
        let photo = document.getElementById("item-photo"); 
        if (data.gender === "male" && data.age > 35) {
            photo.setAttribute("src", "img/man.jpg");
        } if (data.gender === "male" && data.age < 35) {
            photo.setAttribute("src", "img/boy.jpg");
        } if (data.gender === "female" && data.age > 35) {
            photo.setAttribute("src", "img/women.jpg");
        } if (data.gender === "female" && data.age < 35) {
            photo.setAttribute("src", "img/girl.jpg");
        }
        let itemName = document.getElementById("item-name");
            itemName.append(data.name);
        let itemAge = document.getElementById("item-age");
            itemAge.append(data.age);
        let itemGender = document.getElementById("item-gender");
            itemGender.append(data.gender);
        let itemBalance = document.getElementById("item-balance");
            itemBalance.append(data.balance);    
    },
                                                    // delete information before displaying new 
    clearAllUserResult: function() {
        let itemName = document.getElementById("item-name");
            itemName.textContent = "";
        let itemAge = document.getElementById("item-age");
            itemAge.textContent = "";
        let itemGender = document.getElementById("item-gender");
            itemGender.textContent = "";
        let itemBalance = document.getElementById("item-balance");
            itemBalance.textContent = "";          
    },
    
    showInsertItem: function() {
        let item = document.getElementById("dataUser");
            item.classList.add("content-right__item-list_show");
    },
                                                    // delete data from the phone screen 
    clearContentItem: function() {
        let elem = document.getElementById("people");
        let childElem = elem.lastChild;
        childElem.remove();
    },
                                                    // close all 
    closeAll: function() {
        let searchMenuHiden = document.getElementsByClassName("content-left__search");
        searchMenuHiden[0].classList.remove("content-left__search_show");
        let contentItem = document.getElementById("content");
        contentItem.setAttribute("style", "display: none");
    }
}

export default view;
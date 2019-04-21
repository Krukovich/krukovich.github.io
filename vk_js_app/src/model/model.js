'use strict'

class Model {
    constructor(){}
        getFriendsData(){
            const data = JSON.parse(localStorage.getItem("objectUserFriends"));
            return data;
        }

        getUserData(){
            const data = JSON.parse(localStorage.getItem("objectUser"));
            const dataUser = data.response[0];
            return dataUser;
        }

        getUserPhotos(){
            const data = JSON.parse(localStorage.getItem("objectUserPhotos"));
            return data;
        }
}

export default Model;   
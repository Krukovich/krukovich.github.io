class Helper {

    getFriendsDataLocalStorege(){
        const data = JSON.parse(localStorage.getItem("objectUserFriends"));
        return data;
    }

    getUserDataLocalStorege(){
        const data = JSON.parse(localStorage.getItem("objectUser"));
        const dataUser = data.response[0];
        return dataUser;
    }

    getUserPhotosLocalStorege(){
        const data = JSON.parse(localStorage.getItem("objectUserPhotos"));
        return data;
    }

    getUserNewsLocalStorege(){
        const data = JSON.parse(localStorage.getItem("objectUserNews"));
        return data; 
    }

    getUserTokenLocalStorege(){
        const data = JSON.parse(localStorage.getItem("tokenAccess"));
        return data;
    }
}

export default Helper;
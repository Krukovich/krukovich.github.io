class Helper {

    getUserToken() {
        let url_string = document.URL,
            url = new URL(url_string),
            accessToken = url.searchParams.get("access_token");
    }

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

    getUserNews(){
        const data = JSON.parse(localStorage.getItem("objectUserNews"));
        return data; 
    }
}

export default Helper;
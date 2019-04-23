class Helper {

    getUserToken() {
        let url_string = document.URL,
            url = new URL(url_string),
            accessToken = url.searchParams.get("access_token");
        console.log(accessToken);
    }

}

export default Helper;
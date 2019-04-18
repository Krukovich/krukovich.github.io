'use strict'

class Service {
	constructor() {}

	getDataServer(){
		$.ajax({
			url: "https://api.vk.com/method/friends.get?fields=photo_200,sex,bdate,city,country,online,education,universities,schools,relation&access_token=f59ab20caa833f179ea956d7807514a17c6daa847ce0b8b59689fd151c5e8f5e73ef628cc023720f88089&v=V",
			method: "GET",
			dataType: "JSONP",
			success: function(data){
				console.log(data);
			}

		})
	}
}
export default Service;











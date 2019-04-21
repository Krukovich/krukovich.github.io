'use strict'

class Service {

	getDataServer(){
		$.ajax({
				url: "https://api.vk.com/method/friends.get?fields=photo_200,sex,bdate,city,country,online,education,universities,schools,relation&access_token=e6c4a3a03eda8ffd19814c612dd8c67d80775e9de768fd6d75d8664b43e62aeb3bd4327839b6008912b95&v=V",
				method: "GET",
				dataType: "JSONP",
				success: function(data){
					localStorage.setItem("objectUserFriends",JSON.stringify(data));
			}
		});
	}

	getDataUserServer(){
		$.ajax({
			url: "https://api.vk.com/method/users.get?fields=photo_50,photos,sex,bdate,city,country,online,education,universities,schools,relation&access_token=e6c4a3a03eda8ffd19814c612dd8c67d80775e9de768fd6d75d8664b43e62aeb3bd4327839b6008912b95&v=V",
			method: "GET",
			dataType: "JSONP",
			success: function(data){
				localStorage.setItem("objectUser",JSON.stringify(data));
			}
		});
	}

	getPhotoUserServer(){
		$.ajax({
			url: "https://api.vk.com/method/photos.get?album_id=profile&access_token=e6c4a3a03eda8ffd19814c612dd8c67d80775e9de768fd6d75d8664b43e62aeb3bd4327839b6008912b95&v=V",
			method: "GET",
			dataType: "JSONP",
			success: function(data){
				localStorage.setItem("objectUserPhotos",JSON.stringify(data));
			}
		});
	}
}
export default Service;










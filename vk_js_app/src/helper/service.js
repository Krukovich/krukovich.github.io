'use strict'

class Service {

	getDataServer(){
		$.ajax({
				url: "https://api.vk.com/method/friends.get?fields=photo_200,sex,bdate,city,country,online,education,universities,schools,relation&access_token=2b162ba86ba68860355df45559e6795a8d3ad0f3f5e5d35f4fa22a050f4e9c3e107c52f3b02c108d3ac78&v=V",
				method: "GET",
				dataType: "JSONP",
				success: function(data){
					localStorage.setItem("objectUserFriends",JSON.stringify(data));
			}
		});
	}

	getDataUserServer(){
		$.ajax({
			url: "https://api.vk.com/method/users.get?fields=photo_50,photos,sex,bdate,city,country,online,education,universities,schools,relation&access_token=2b162ba86ba68860355df45559e6795a8d3ad0f3f5e5d35f4fa22a050f4e9c3e107c52f3b02c108d3ac78&v=V",
			method: "GET",
			dataType: "JSONP",
			success: function(data){
				localStorage.setItem("objectUser",JSON.stringify(data));
			}
		});
	}

	getPhotoUserServer(){
		$.ajax({
			url: "https://api.vk.com/method/photos.get?album_id=profile&access_token=2b162ba86ba68860355df45559e6795a8d3ad0f3f5e5d35f4fa22a050f4e9c3e107c52f3b02c108d3ac78&v=V",
			method: "GET",
			dataType: "JSONP",
			success: function(data){
				localStorage.setItem("objectUserPhotos",JSON.stringify(data));
			}
		});
	}
}
export default Service;










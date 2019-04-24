'use strict'

class Service {

	getDataServer(){
		$.ajax({
				url: "https://api.vk.com/method/friends.get?fields=photo_200,sex,bdate,city,country,online,education,universities,schools,relation&access_token=a388ec9543fbe8b463fbe5de7ba9f8fe7237b4b45152f5676ef24ad7b7fa836afc3dda5fc3a47eb5fdc17&v=V",
				method: "GET",
				dataType: "JSONP",
				success: function(data){
					localStorage.setItem("objectUserFriends",JSON.stringify(data));
			},
			error: function(){
				alert("Фото друзей не загружены");
			}
		});
	}

	getDataUserServer(){
		$.ajax({
			url: "https://api.vk.com/method/users.get?fields=photo_50,photos,sex,bdate,city,country,online,education,universities,schools,relation&access_token=a388ec9543fbe8b463fbe5de7ba9f8fe7237b4b45152f5676ef24ad7b7fa836afc3dda5fc3a47eb5fdc17&v=V",
			method: "GET",
			dataType: "JSONP",
			success: function(data){
				localStorage.setItem("objectUser",JSON.stringify(data));
			},
			error: function(){
				alert("Данные пользователя не загружен");
			}
		});
	}

	getPhotoUserServer(){
		$.ajax({
			url: "https://api.vk.com/method/photos.get?album_id=profile&access_token=a388ec9543fbe8b463fbe5de7ba9f8fe7237b4b45152f5676ef24ad7b7fa836afc3dda5fc3a47eb5fdc17&v=V",
			method: "GET",
			dataType: "JSONP",
			success: function(data){
				localStorage.setItem("objectUserPhotos",JSON.stringify(data));
			},
			error: function(){
				alert("Фото друзей не загружены");
			}
		});
	}

	getUserNews(){
		$.ajax({
			url: "https://api.vk.com/method/newsfeed.get?filters=post,photo,photo_tag,wall_photo&access_token=a388ec9543fbe8b463fbe5de7ba9f8fe7237b4b45152f5676ef24ad7b7fa836afc3dda5fc3a47eb5fdc17&v=V",
			method: "GET",
			dataType: "JSONP",
			success: function(data){
				localStorage.setItem("objectUserNews",JSON.stringify(data));
			},
			error: function(){
				alert("Новости не загружены");
			}
		});
	}
}
export default Service;










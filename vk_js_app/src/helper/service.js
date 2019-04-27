class Service {

	getDataServerAndPutLocalStorege(accessToken){
		$.ajax({
				url: "https://api.vk.com/method/friends.get?fields=photo_200,sex,bdate,city,country,online,education,universities,schools,relation&access_token=" + accessToken + "&v=V",
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

	getDataUserServerAndPutLocalStorege(accessToken){
		$.ajax({
			url: "https://api.vk.com/method/users.get?fields=photo_50,photos,sex,bdate,city,country,online,education,universities,schools,relation&access_token=" + accessToken + "&v=V",
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

	getPhotoUserServerAndPutLocalStorege(accessToken){
		$.ajax({
			url: "https://api.vk.com/method/photos.get?album_id=profile&access_token=" + accessToken + "&v=V",
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

	getUserNewsAndPutLocalStorege(accessToken){
		$.ajax({
			url: "https://api.vk.com/method/newsfeed.get?filters=post,photo,photo_tag,wall_photo&access_token=" + accessToken + "&v=V",
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

	getUserTokenAndPutLocalStorege(){
		$("document").ready(function() {
			let pageURL = window.location.href;
			let pageURLData = pageURL.split("access_token="),
				pageDataToken = pageURLData[1].split('&'),
				accessToken = pageDataToken[0];
	
				localStorage.setItem("tokenAccess", accessToken);
		});
		}
}

export default Service;










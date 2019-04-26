class Service {

	getDataServer(){
		$.ajax({
				url: "https://api.vk.com/method/friends.get?fields=photo_200,sex,bdate,city,country,online,education,universities,schools,relation&access_token=4446ddb54c74f64c1e151ba73093335d1928f99351601321c43a2b338b2f33d33e77e57ad4070d5e6e699&v=V",
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
			url: "https://api.vk.com/method/users.get?fields=photo_50,photos,sex,bdate,city,country,online,education,universities,schools,relation&access_token=4446ddb54c74f64c1e151ba73093335d1928f99351601321c43a2b338b2f33d33e77e57ad4070d5e6e699&v=V",
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
			url: "https://api.vk.com/method/photos.get?album_id=profile&access_token=4446ddb54c74f64c1e151ba73093335d1928f99351601321c43a2b338b2f33d33e77e57ad4070d5e6e699&v=V",
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
			url: "https://api.vk.com/method/newsfeed.get?filters=post,photo,photo_tag,wall_photo&access_token=4446ddb54c74f64c1e151ba73093335d1928f99351601321c43a2b338b2f33d33e77e57ad4070d5e6e699&v=V",
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

	getUserToken() {
		let strGET = window.location.search.replace( '=', '&');
		console.log(strGET);
	}
}
export default Service;










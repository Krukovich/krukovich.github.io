'use strict'

class Service {

	getDataServer(){
		return $.ajax({
			url: "https://api.vk.com/method/friends.get?fields=photo_200,sex,bdate,city,country,online,education,universities,schools,relation&access_token=ce385eae50397516a3b88e5355a62407e58f43b9e8b151c487f5843661ed22b81b0ed6d44f038164f4b34&v=V",
			method: "GET",
			dataType: "JSONP",
			success: function(data){
				return data;
			}

		})
	}
}
export default Service;











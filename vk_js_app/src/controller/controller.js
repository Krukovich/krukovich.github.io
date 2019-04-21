import Service from "../helper/service";
import View from "../view/view";
import Model from "../model/model";

	const controller = function() {
		let	service = new Service();
		let view = new View();
		let model = new Model();
		let loadFriends = document.getElementById("loadFriends");
			loadFriends.addEventListener("click", function(){
		
		service.getDataServer();
		let data = model.getFriendsData();
		view.removeDataInPage();
		view.showFriendsData(data);
		view.showFriendsCount(data);

		service.getDataUserServer();
		let dataUser = model.getUserData();
		view.insertUserData(dataUser);
	});

}


export default controller;
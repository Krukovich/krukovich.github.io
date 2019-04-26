import Service from "../helper/service";
import View from "../view/view";
import Model from "../model/model";
import Helper from "../helper/helper"

	const controller = function() {
		let helper = new Helper();
		let	service = new Service();
		let view = new View();
		let model = new Model();
		let loadFriends = document.getElementById("loadFriends");
			loadFriends.addEventListener("click", function(){
		
		service.getUserToken();

		service.getDataServer();
		let data = helper.getFriendsData();
		let friendsData = model.changeFriendsData(data);
		view.removeDataInPage();
		view.showFriendsData(friendsData);
		view.showFriendsCount(friendsData);

		service.getDataUserServer();
		let dataUser = helper.getUserData();
		view.insertUserData(dataUser);
	});

}


export default controller;
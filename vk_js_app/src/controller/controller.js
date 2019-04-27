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

		const token = helper.getUserTokenLocalStorege();		
		service.getDataServerAndPutLocalStorege(token);

		let data = helper.getFriendsDataLocalStorege();
		let friendsData = model.changeFriendsData(data);

		view.removeDataInPage();
		view.showFriendsData(friendsData);
		view.showFriendsCount(friendsData);

		service.getDataUserServerAndPutLocalStorege();
		let dataUser = helper.getUserDataLocalStorege();
		view.insertUserData(dataUser);
	});

}


export default controller;
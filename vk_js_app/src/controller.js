import Service from "../src/service";
import View from "../src/view";

	const controller = function() {
		let	service = new Service();

		let view = new View();

		let loadFriends = document.getElementById("loadFriends");
			loadFriends.addEventListener("click", function(){
		const dataFriends = service.getDataServer();

		view.showFriendsData(dataFriends);
	});
}


export default controller;
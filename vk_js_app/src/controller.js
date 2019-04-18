import Service from "../src/service";

class Controller {
	constructor(){
		let service = new Service();
		let loadFriends = document.getElementById("loadFriends");
			loadFriends.addEventListener("click", function(){
			service.getDataServer();
		});
	}
}

export default Controller;
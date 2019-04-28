import Service from "../helper/service";
import Helper from "../helper/helper";
import View from "../view/view";

const login = function() {

    let service = new Service();
    let helper = new Helper();
    let view = new View();
    
    let start = document.getElementById("start");
    start.addEventListener("click", function() {
        service.getUserTokenAndPutLocalStorege();
        let login = document.getElementById("login");
        login.remove();

        service.getDataUserServerAndPutLocalStorege();
		let dataUser = helper.getUserDataLocalStorege();
		view.insertUserData(dataUser);
    });
}

export default login;
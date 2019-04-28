import Service from "../helper/service";

const login = function() {

    let service = new Service();
    
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
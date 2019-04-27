import Service from "../helper/service";

const login = function() {

    let service = new Service();
    
    let start = document.getElementById("start");
    start.addEventListener("click", function() {
        service.getUserTokenAndPutLocalStorege();
        let login = document.getElementById("login");
        login.remove();
    });
}

export default login;
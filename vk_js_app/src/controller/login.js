import Service from "../helper/service";

const login = function() {

    let service = new Service();
    
    let start = document.getElementById("start");
    start.addEventListener("click", function() {
        service.getUserToken();
    });
}

export default login;
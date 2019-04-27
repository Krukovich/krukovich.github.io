import Service from "../helper/service";
import View from "../view/view";
import Model from "../model/model";
import Helper from "../helper/helper"

const showUserNews = function() {
    let userNews  = document.getElementById("userNews");
    userNews.addEventListener("click", function(){

        let helper = new Helper();
        let model = new Model();
        let view = new View();
        let service = new Service();

        let accessToken = localStorage.getItem("tokenAccess");
        service.getUserNewsAndPutLocalStorege(accessToken);

        let data = helper.getUserNewsLocalStorege();
        let userNews = model.changeUserNews(data);
        view.removeDataInPage();
        view.showUserNews(userNews)
        view.showUserNewsCount(userNews);

        service.getUserNewsAndPutLocalStorege();
		let dataUser = helper.getUserNewsLocalStorege();
		view.insertUserData(dataUser);
    });
}

export default showUserNews;
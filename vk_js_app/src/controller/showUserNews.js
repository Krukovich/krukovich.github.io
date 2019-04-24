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

        service.getUserNews();
        helper.getUserNews();


    });
}

export default showUserNews;
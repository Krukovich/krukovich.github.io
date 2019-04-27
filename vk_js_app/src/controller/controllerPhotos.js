import View from "../view/view";
import Model from "../model/model";
import Service from "../helper/service";
import Helper from "../helper/helper";

const showUserPhotos = function() {
    let helper = new Helper();
    let view = new View();
    let service = new Service();
    let loadUserPhotos = document.getElementById("loadPhotos");
    loadUserPhotos.addEventListener("click", function() {
    
    const token = helper.getUserTokenLocalStorege();
    service.getPhotoUserServerAndPutLocalStorege(token);
    
    let dataPhoto = helper.getUserPhotosLocalStorege();
    view.removeDataInPage();
    view.showUserPhotos(dataPhoto);
    view.showPhotosCount(dataPhoto);

    service.getDataUserServerAndPutLocalStorege();
    let dataUser = helper.getUserDataLocalStorege();
    view.insertUserData(dataUser);

    });
}
export default showUserPhotos;
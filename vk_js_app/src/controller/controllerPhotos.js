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
        
    service.getPhotoUserServer();
    let dataPhoto = helper.getUserPhotos();
    view.removeDataInPage();
    view.showUserPhotos(dataPhoto);
    view.showPhotosCount(dataPhoto);

    service.getDataUserServer();
    let dataUser = helper.getUserData();
    view.insertUserData(dataUser);

    });
}
export default showUserPhotos;
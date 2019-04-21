import View from "../view/view";
import Model from "../model/model";
import Service from "../helper/service"

const showUserPhotos = function() {
    let view = new View();
    let model = new Model();
    let service = new Service();
    let loadUserPhotos = document.getElementById("loadPhotos");
    loadUserPhotos.addEventListener("click", function() {
        
    service.getPhotoUserServer();
    let dataPhoto = model.getUserPhotos();
    view.removeDataInPage();
    view.showUserPhotos(dataPhoto);

    let dataUser = model.getUserData();
    view.insertUserData(dataUser);
    });
}
export default showUserPhotos;
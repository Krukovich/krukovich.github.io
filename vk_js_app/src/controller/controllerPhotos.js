import View from "../view/view";
import Service from "../helper/service";
import Helper from "../helper/helper";

const showUserPhotos = function() {
    let helper = new Helper();
    let view = new View();
    let service = new Service();
    let loadUserPhotos = document.getElementById("loadPhotos");
    loadUserPhotos.addEventListener("click", function() {
    
    let accessToken = localStorage.getItem("tokenAccess");
    service.getPhotoUserServerAndPutLocalStorege(accessToken);
    
    let dataPhoto = helper.getUserPhotosLocalStorege();
    view.removeDataInPage();
    view.showUserPhotos(dataPhoto);
    view.showPhotosCount(dataPhoto);
    });
}
export default showUserPhotos;
import View from "../view/view";
import Model from "../model/model";
import Helper from "../helper/helper";

const selectFriend = function() {
        let select = document.getElementById("midWrapper");
        select.addEventListener("click", function(event){
            let userId = event.target.id;
    
            let helper = new Helper();
            let model = new Model();
            let view = new View();
    
            let data = helper.getFriendsData();
            let userFriend = model.selectUserFriend(data, userId);
            view.removeDataInPage();
            view.showSelectUserFriend(userFriend);
            
        });
}

export default selectFriend;
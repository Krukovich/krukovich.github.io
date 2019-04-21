'use strict'

class View {
    constructor(){}

    removeDataInPage(){
        let contentPage = document.getElementById("contentPage");
        contentPage.remove();
        let contentPageTwo = document.getElementById("contentPageTwo");
        contentPageTwo.remove();
        let contentTitle = document.getElementById("contentTitle");
        contentTitle.remove();
        let contentText = document.getElementById("contentText");
        contentText.remove();
        let divPhoto = document.getElementById("friendsPhoto"),
            divPhotoImg = divPhoto.getElementsByTagName("img"),
            divPhotoImgArray = [].slice.call(divPhotoImg);
        divPhotoImgArray.forEach(item => {
            item.remove();
        });
    }

    showFriendsData(data){
        try {
            let dataArray = data.response;
            dataArray.forEach(item => {
                let divPhotoInsert = document.getElementById("friendsPhoto");
                
                if (!(item.photo_200 == undefined)) {
                    let photoItem = document.createElement("div");
                        photoItem.classList.add("content-photo__friends");
                    let photoItemName = document.createElement("div");
                        photoItemName.classList.add("content-photo__item-name");
                        photoItemName.append(item.first_name + " " + item.last_name);
                    let img = document.createElement("img");
                        img.classList.add("img-item");
                        img.setAttribute("src", item.photo_200);
                    photoItem.append(img);
                    photoItem.append(photoItemName);
                    divPhotoInsert.append(photoItem);
                }
            });
        } catch (error) {
            alert("Данные не полученны");
        }
    }

    showFriendsCount(data){
        let dataArray = data.response;
        let count = dataArray.length;
        let friendsCount = document.getElementById("friendsCount");
        friendsCount.append(count);
    }

    insertUserData(dataUser){
        let userPhoto = document.getElementById("userPhoto");
        userPhoto.setAttribute("src", dataUser.photo_50);
        let user = document.getElementById("userName");
        user.remove();
        let headerName = document.getElementById("headerName");
        let userName = document.createElement("span");
        userName.append(dataUser.last_name + " " + dataUser.first_name);
        headerName.append(userName);
        let time = document.getElementById("userTime");
        time.remove();
        let nowTime = new Date();
        let userTime = document.createElement("span");
        userTime.append(" " + "сегодня в " + nowTime.getHours() + " : " + nowTime.getMinutes());
        headerName.append(userTime);
    }

    showUserPhotos(dataPhotos){
        let dataPhotosArray = dataPhotos.response;
        dataPhotosArray.forEach(item => {
            let divPhotoInsert = document.getElementById("friendsPhoto");
            let photoItem = document.createElement("div");
            photoItem.classList.add("content-photo__friends");
            let photoItemName = document.createElement("div");
            let img = document.createElement("img");
            img.classList.add("img-item");
            img.setAttribute("src", item.src_xxbig);
        photoItem.append(img);
        photoItem.append(photoItemName);
        divPhotoInsert.append(photoItem);

        });
    }
}

export default View;
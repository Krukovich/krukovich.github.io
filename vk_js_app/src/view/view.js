'use strict'

class View {
    constructor(){}

    removeUserFriendPhoto() {
        let userFriendsPhoto = document.getElementById("friendsPhoto");
        userFriendsPhoto.remove();
    }

    showSelectUserFriend(data) {
        let div = document.getElementById("midWrapper");
        let midList = document.createElement("div");
        midList.setAttribute("id", "midList");
        let contentMid = document.createElement("div");
        contentMid.classList.add("content__mid");
        contentMid.setAttribute("id", "contentMid");
        let img = document.createElement("img");
        img.setAttribute("src", data.user.photo_200);
        contentMid.append(img);
        let name = document.createElement("li");
        name.append(data.user.first_name + " " + data.user.last_name);
        contentMid.append(name);
        let date = document.createElement("li");
        date.append(data.user.bdate);
        contentMid.append(date);
        let university = document.createElement("li");
        university.append(data.user.university_name);
        contentMid.append(university);
        let education = document.createElement("li");
        education.append(data.user.education_form);
        contentMid.append(education);
        midList.append(contentMid);
        div.append(midList);
    }

    removeDataInPage(){
        let contentPage = document.getElementById("midList");
        contentPage.remove();
    }

    showFriendsData(data){
        let content = document.getElementById("midWrapper"),
            midList = document.createElement("div");
            midList.setAttribute("id", "midList");
        let contentMid = document.createElement("div");
            contentMid.classList.add("content__mid");
            contentMid.setAttribute("id", "contentMid");
            midList.append(contentMid)
            content.append(midList);
        let contentPhoto = document.createElement("div");
        contentPhoto.classList.add("content_photo");
        contentPhoto.setAttribute("id", "friendsPhoto");
        contentMid.append(contentPhoto);
            data.forEach(item => {
                let divPhotoInsert = document.getElementById("friendsPhoto");
            
                if (!(item.src == undefined)) {
                    let photoItem = document.createElement("div");
                        photoItem.classList.add("content-photo__friends");
                        photoItem.setAttribute("id", "photoItem");
                    let photoItemName = document.createElement("div");
                        photoItemName.classList.add("content-photo__item-name");
                        photoItemName.append(item.firstName + " " + item.lastName);
                    let img = document.createElement("img");
                        img.classList.add("img-item");
                        img.setAttribute("src", item.src);
                        img.setAttribute("id", item.id)
                    photoItem.append(img);
                    photoItem.append(photoItemName);
                    divPhotoInsert.append(photoItem);
                }
        });
    }

    showPhotosCount(data){
        let count = data.response;
        let photosCount = document.getElementById("photosCount");
        photosCount.innerHTML = count.length;
    }

    showFriendsCount(data){
        let count = data.length;
        let friendsCount = document.getElementById("friendsCount");
        friendsCount.innerHTML = count;
    }

    insertUserData(dataUser){
        let userName = document.getElementById("userName");
        userName.innerHTML = dataUser.last_name + " " + dataUser.first_name;
        let userPhoto = document.getElementById("profileImage");
        userPhoto.setAttribute("src", dataUser.photo_50);
        let userTime = document.getElementById("loginTime"),
            nowTime = new Date();
        userTime.innerHTML = " " + "сегодня в " + nowTime.getHours() + " : " + nowTime.getMinutes();
    }

    showUserPhotos(dataPhotos){
        let content = document.getElementById("midWrapper"),
            midList = document.createElement("div");
            midList.setAttribute("id", "midList");
        let contentMid = document.createElement("div");
        contentMid.classList.add("content__mid");
        contentMid.setAttribute("id", "contentMid");
        midList.append(contentMid)
        content.append(midList);
        let contentPhoto = document.createElement("div");
        contentPhoto.classList.add("content_photo");
        contentPhoto.setAttribute("id", "friendsPhoto");
        contentMid.append(contentPhoto);
        let dataPhotosArray = dataPhotos.response;
        dataPhotosArray.forEach(item => {
            let divPhotoInsert = document.getElementById("friendsPhoto");
            let photoItem = document.createElement("div");
            photoItem.classList.add("content-photo__friends");
            let photoItemName = document.createElement("div");
            let img = document.createElement("img");
            img.classList.add("img-item");
            img.setAttribute("src", item.src_big);
        photoItem.append(img);
        photoItem.append(photoItemName);
        divPhotoInsert.append(photoItem);
        });
    }
}

export default View;
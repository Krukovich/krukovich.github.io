class View {
    constructor(){}

    removeUserFriendPhoto() {
        let userFriendsPhoto = document.getElementById("friendsPhoto");
        userFriendsPhoto.remove();
    }

    showUserNews(userNews){
        let div = document.getElementById("midWrapper");
        let content = document.createElement("div");
            content.classList.add("mid__list");
            content.classList.add("content_column");
            content.setAttribute("id", "midList");
        userNews.forEach(item => {
            let contentMid = document.createElement("div");
            contentMid.classList.add("content__mid");
            let contentHeader = document.createElement("div");
            contentHeader.classList.add("content__header");
            let contentLogo = document.createElement("div");
            contentLogo.classList.add("content__logo");
            let img = document.createElement("img");
            img.setAttribute("src", item.logo);
            let contentTitle = document.createElement("div");
            contentTitle.classList.add("header__name");
            let contentText = document.createElement("div");
            contentText.classList.add("content__text");
            let contentPhoto = document.createElement("div");
            contentPhoto.classList.add("content_photo");

                if (item.photos !== undefined) {
                    item.photos.forEach(elem => {
                        if (elem.type == "photo") {
                            let img = document.createElement("img");
                            img.classList.add("content-photo__item");
                            img.setAttribute("src", elem.photo.src_xbig);
                            contentPhoto.append(img);
                        }
                        if (elem.type == "link") {
                            let img = document.createElement("img");
                            img.classList.add("content-photo__item");
                            img.setAttribute("src", elem.link.url);
                            contentPhoto.append(img);
                        }
                        if (elem.type == "doc") {
                            let img = document.createElement("img");
                            img.classList.add("content-photo__item");
                            img.setAttribute("src", elem.doc.url);
                            contentPhoto.append(img);
                        }
                        if (elem.type == "video") {
                            let img = document.createElement("img");
                            img.classList.add("content-photo__item");
                            img.setAttribute("src", elem.video.image_big);
                            contentPhoto.append(img);
                        }
                    });    
                }
            contentText.append(item.text);
            contentTitle.append(item.title);
            contentLogo.append(img);
            contentHeader.append(contentLogo);
            contentHeader.append(contentTitle);
            contentMid.append(contentHeader);
            contentMid.append(contentText);
            contentMid.append(contentPhoto);
            content.append(contentMid);
            div.append(content);
        });
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

    showUserNewsCount(userNews){
        let count = userNews.length;
        let newsCount = document.getElementById("newsCount");
        newsCount.innerHTML = count;
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
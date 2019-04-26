class Model {
    constructor(){}        
        changeFriendsData(data){
            const friendsData = data.response;
            const frienDataArray = [];
            friendsData.forEach(item => {
                let user = {};
                user.id = item.uid;
                user.firstName = item.first_name;
                user.lastName = item.last_name;
                user.src = item.photo_200;
                frienDataArray.push(user);
            }); 
            return frienDataArray;
        }

        selectUserFriend(data, userId){
            let array = [];
            let result = {};
            let dataArray = data.response;
            dataArray.forEach(item => {

                if (item.uid == userId) {
                    array.push(item);
                }
            });
            result.user = array[0];
            return result;
        }

        changeUserNews(data) {
            let dataGroup = data.response.groups;
            let dataItem = data.response.items;
            let result = [];
            dataItem.forEach(item => {
                let number = Math.abs(item.source_id);
                let news = {};
                dataGroup.forEach(elem => {
                    if (number == elem.gid) {
                        news.title = elem.name;
                        news.logo = elem.photo;
                        news.text = item.text;
                        news.likes = item.likes;
                        news.photos = item.attachments;
                        result.push(news);
                    }
                });
            });
            return result;
        }
}

export default Model;   
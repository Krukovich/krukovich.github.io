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
}

export default Model;   
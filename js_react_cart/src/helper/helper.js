class Helper {

    // получаем данные 
    getDataAndPrepare() {
        const { Value } = require("../data/data.json");
        const name = require("../data/names.json");
        let result = [];
        let list = Value.Goods;
        list.forEach(item => {
            for (let i in name) {
                if (item.G === Number(i)) {
                    let temp = this.prepareParams(item, name[i]);
                    result.push(...temp);
                }
            }
        });
        return result;
    }

    // добавляем к дате свой id
    addDataId(data) {
        let id = 1;
        data.forEach(item => {
            item.id = id;
            id++
        });
        return data;
    }

    // подготавливаем данные в нужном формате
    prepareParams(item, list) {
        let result = [];
        let li = list.B;
        for(let i in li) {
            if (item.T === Number(i)){
                result.push({ 
                    title: list.G, 
                    name: li[i].N, 
                    price: Number((Number(item.C) * 2.10).toFixed(2)),
                    count: item.P, 
                    color: "",
                });
            }
        }
        return result;
    }

    // функция для обновления стоимости товара
    updateData(list) {        
        let newPrice = this.getRandomPrice(80);
        let newIndex = this.getRandomIndex(list.length);
        let oldPrice = list[newIndex].price;

        if (list[newIndex].price + newPrice < 0) {
            list[newIndex].price = Number((list[newIndex].price + 0).toFixed(2));
        } else {
            let fixNumber = Number((list[newIndex].price + newPrice).toFixed(2));
            list[newIndex].price = fixNumber;
        }

        if (oldPrice < list[newIndex].price) {
            list[newIndex].color = "colorRed";
        } else {
            list[newIndex].color = "colorGreen";
        }
        return list;
    }

    // получаем новую цену в значении (+/-), что бы обыграть рост и спад цен
    getRandomPrice(max) {
        return ((Math.random() < 0.5) ? -1 : 1) * Math.floor(Math.random() * Math.floor(max));
    }

    // получаем случайное число для индекса массива товара
    getRandomIndex(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    selectUserItem() {
        let data = this.state.data;
        let idArray = [];
        let newCartData = [];

        // преобразуем в массив так так получаем HTML коллекцию
        let inputList = [...document.getElementsByTagName("input")];

        if (inputList.length != 0) {
            inputList.forEach(item => {
                if (item.checked == true) {
                    idArray.push(Number(item.id));
                }
            });
        }

        // фильтруем массив дата по выбору пользователя 
        if (idArray.length != 0) {
            newCartData = data.filter(item => idArray.some(i => i === item.id));
        }

        this.setState({
            cartData: newCartData
        });
    }

    // очистка стейт данных корзины
    deleteCartState() {
        this.setState({
            cartData : []
        });
    }
}

export default Helper;
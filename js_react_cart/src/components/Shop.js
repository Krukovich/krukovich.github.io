// основной компонент приложения, вспомогательные функции вынесены в файл helper

import React, { Component } from "react";
import { Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import Cart from "../components/Cart";
import Table from "../components/Table";
import Helper from "../helper/helper";

class Shop extends Component {
    constructor(props) {
        super(props);
        this.helper = new Helper();

        this.state = {
            data: [],
            cartData: [] 
        }
    }

    componentWillMount() {
        const data = this.helper.getDataAndPrepare();
        const finishData = this.helper.addDataId(data);

        this.setState({
            data: finishData
        });
    }

    componentDidMount() {
        //реализация изменения стоимости товара
        setInterval(() => {
            let list = this.state.data;
            let newList = this.helper.updateData(list);

            this.setState({
                data: newList
            })
        }, 15000);
    }

    render() {
        return (
            <div>
                <div className="header">
                    <h1>Header</h1>
                    <Cart data={this.state.cartData} func={this.helper.deleteCartState.bind(this)}/>
                </div>
                <Table data={this.state.data} />
                <Button 
                    className="addItem"
                    variant="contained"
                    color="default"
                    startIcon={<ShoppingCartIcon/>}
                    onClick={this.helper.selectUserItem.bind(this)}
                >
                    Купить
                </Button>
            </div>
        );
    }
}

export default Shop;


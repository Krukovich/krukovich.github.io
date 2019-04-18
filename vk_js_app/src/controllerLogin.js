'use strict'
import viewLogin from "../src/viewLogin"

const loginController = function(){
    let view = new viewLogin();
    view.createLink();
}

export default loginController;
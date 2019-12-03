import IMask from 'imask';

var element = document.getElementById("userPhone");
var maskOptions = {
  mask: '+{375}(00)000-00-00'
};
var mask = IMask(element, maskOptions);

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    let userName = document.getElementById("userName").value;
    let userPhone = document.getElementById("userPhone").value;
    let error = document.getElementById("error");
    let msg = "Введите корректные данные";

    if(!/^[0-9]+$/.test(userName) && userName != "" && userPhone != ""){
        let contactForm = document.getElementById("contactForm");
        let hiddenBlock = document.getElementById("hiddenBlock");
        contactForm.style.display = "none";
        hiddenBlock.style.display = "block";
    } else {
        let inputName = document.getElementById("userName");
        let inputPhone = document.getElementById("userPhone");
        inputName.style.borderColor="red";
        inputPhone.style.borderColor="red";
        error.innerHTML = msg;
    }
});

let btnclose = document.getElementById("btnClose");
btnclose.addEventListener("click", () => {
    toggleBlockAndClean();
});


let toggleBlockAndClean = () => {
    let form = document.getElementById("contactForm");
    let block = document.getElementById("hiddenBlock");
    form.style.display = "block";
    form.style.paddingTop = "80px";
    block.style.display = "none";

    let userForm = document.forms.userForm;
    let formArray = [].slice.call(userForm);
    formArray.forEach((input) => {
        input.value = "";
    })
}
 
import $ from "jquery";
global.jQuery = global.$ = $;

window.onload = () => {
    let btn = document.getElementById("btnPopup");
    btn.addEventListener("click", () => {
        let popup = document.getElementById("showPopup");
        popup.style.display = "block";
    });

    let btnClose = document.getElementById("btnClose");
    btnClose.addEventListener("click", () => {
        let popup = document.getElementById("showPopup");
        popup.style.display = "none";
    });

    let btnCloseHidden = document.getElementById("btnCloseHidden");
    btnCloseHidden.addEventListener("click", () => {
        let showPopupHidden = document.getElementById("showPopupHidden");
        showPopupHidden.style.display = "none";
    });

    let subBtnHidden = document.getElementById("subBtnHidden");
    subBtnHidden.addEventListener("click", () => {
        let showPopupHidden = document.getElementById("showPopupHidden");
        showPopupHidden.style.display = "none";
    });
    
    let subBtn = document.getElementById("subBtn");
    subBtn.addEventListener("click", () => {
        let name = document.getElementById("name");
        let userPhone = document.getElementById("userPhone");
        if (name.value != "" && userPhone.value != "") {
            $.ajax({
                type: "POST",
                url: "../src/php/send.php",
                data: $(this).serialize()
            }).done(() => {
                closeAndShowPopup();
            });
        } else {
            chechValue(name, userPhone);
        }
    });

    function chechValue(name, userPhone) {
        if (name.value === "") {
            name.style.borderColor = "red";
        } else if (userPhone.value === "") {
            userPhone.style.borderColor = "red";
        }
    }

    function closeAndShowPopup() {
        let pop = document.getElementById("showPopup");
        pop.style.display = "none";
        let showPopupHidden = document.getElementById("showPopupHidden");
        showPopupHidden.style.display = "block";
    }
}
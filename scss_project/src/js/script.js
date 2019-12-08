
window.onload = () => {
    let blockHidden = [...document.getElementsByClassName("hidden-block__item")];
    blockHidden.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.classList.add("show");
        });
        item.addEventListener("mouseout", () => {
            item.classList.remove("show");
        });
    });

    let btnSearch = document.getElementById("btnSearch");
    btnSearch.addEventListener("click", () => {
        let searchBlock = document.getElementById("search");
        let mainContent = document.getElementById("mainContent");
        searchBlock.style.transform = "translateY(0)";
        searchBlock.style.transition = "1s";
        mainContent.style.transform = "translateY(-100%)";
        mainContent.style.transition = "1s";
        mainContent.style.height = "100vh";
    });

    let btnClose = document.getElementById("btnClose");
    btnClose.addEventListener("click", () => {
        let searchBlock = document.getElementById("search");
        let mainContent = document.getElementById("mainContent");
        searchBlock.style.transform = "translateY(-100%)";
        searchBlock.style.transition = "1s";
        mainContent.style.transform = "translateY(0)";
        mainContent.style.transition = "1s";
        mainContent.style.height = "100%";
    })

    let btnMenu = document.getElementById("btnMenu");
    btnMenu.addEventListener("click", () => {
        let blockMenu = document.getElementById("blockMenu");
        blockMenu.style.transform = "translateY(0)";
        blockMenu.style.transition = "1s";
    });

    let btnCLoseMenu = document.getElementById("btnCLoseMenu");
    btnCLoseMenu.addEventListener("click", () => {
        let blockMenu = document.getElementById("blockMenu");
        blockMenu.style.transform = "translateY(100%)";
        blockMenu.style.transition = "1s";
    });

    let searchBtnsecond = document.getElementById("searchBtnsecond");
    searchBtnsecond.addEventListener("click", () => {
        let searchMobile = document.getElementById("searchMobile");
        let mainContentMobile = document.getElementById("mainContentMobile");
        mainContentMobile.style.display = "none";
        searchMobile.style.transform = "translateY(0)";
        searchMobile.style.transition = "1s";
    });

    let mobileBtnClose = document.getElementById("mobileBtnClose");
    mobileBtnClose.addEventListener("click", () => {
        let searchMobile = document.getElementById("searchMobile");
        let mainContentMobile = document.getElementById("mainContentMobile");
        mainContentMobile.style.display = "block";
        searchMobile.style.transform = "translateY(-100%)";
        searchMobile.style.transition = "1s";
    });

    let menuBtnSecond = document.getElementById("menuBtnSecond");
    menuBtnSecond.addEventListener("click", () => {
        let menuMobile = document.getElementById("menuMobile");
        let mainContentMobile = document.getElementById("mainContentMobile");
        mainContentMobile.style.display = "none";
        menuMobile.style.transform = "translateX(0)";
        menuMobile.style.transition = "1s";
    });

    let btnCloseMenuMobile = document.getElementById("btnCloseMenuMobile");
    btnCloseMenuMobile.addEventListener("click", () => {
        let menuMobile = document.getElementById("menuMobile");
        let mainContentMobile = document.getElementById("mainContentMobile");
        mainContentMobile.style.display = "block";
        menuMobile.style.transform = "translateX(-100%)";
        menuMobile.style.transition = "1s";
    });

    //прокручиваем страницу наверх
    let btnUp = document.getElementById("btnUp");
    btnUp.addEventListener("click", () => {
        let timer = setInterval(() => {
        let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
            if (top > 0) {
                window.scrollBy(0,-50);
            } else {
                clearInterval(timer);
            }
        },20);
    });

    //меняем картинку background
    setInterval(() => {
        let mainContent = document.getElementById("mainContent");
        if (mainContent.className.indexOf("main-content-second") < 0) {
            mainContent.classList.add("main-content-second");
        } else {
            mainContent.classList.remove("main-content-second");
        }
    }, 5000);
}

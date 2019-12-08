
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
}

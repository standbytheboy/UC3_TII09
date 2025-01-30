document.addEventListener("DOMContentLoaded", () => {
    const btnMenu = document.getElementById("btnMenu");
    const menuList = document.getElementById("menu-list");


    btnMenu.addEventListener("click", () => {
        menuList.style.display = menuList.style.display === "block" ? "none" : "block";
    });

    const openPanel = document.getElementById("open-panel");
    const lateralPanel = document.getElementById("lateral-panel");
    const closePanel = document.getElementById("close-panel");

    openPanel.addEventListener("click", () => {
        lateralPanel.style.right = lateralPanel.style.right === "0px" ? "-250px" : "0px";
    });

    closePanel.addEventListener("click", () => {
        lateralPanel.style.right = "-250px";
    });

    const slides = document.querySelector(".slides")
    let index = 0;

    function mudarSlide() {

        index = (index + 1) % 3;
        slides.style.transform = `translateX(-${index * 100}%)`
    }

    setInterval(mudarSlide, 5000);
})
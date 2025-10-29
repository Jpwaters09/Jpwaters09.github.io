let headerLinksMobileMenu;
let menuButton;
let menuCloseButton;

document.addEventListener('DOMContentLoaded', function () {
    headerLinksMobileMenu = document.getElementById("headerLinksMobileMenu");
    menuButton = document.getElementById("menuButton");
    menuCloseButton = document.getElementById("menuCloseButton");

    menuCloseButton.style.display = "none";
    headerLinksMobileMenu.style.display = "none";
});

function showMobileMenu() {
    headerLinksMobileMenu.style.display = "flex";
    menuButton.style.display = "none";
    menuCloseButton.style.display = "";
}

function hideMobileMenu() {
    headerLinksMobileMenu.style.display = "none";
    menuButton.style.display = "";
    menuCloseButton.style.display = "none";
}
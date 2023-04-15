// * LIGHT DARK MODE
document.getElementById("switchButton").onclick = function () {
    document.getElementById("myBody").classList.toggle("dark");
};








//* NAVBAR MENU
const navbarBtn = document.querySelector(".js-navbar-menu-btn");
const overlay = document.querySelector(".js-overlay");
const overlayClose = document.querySelector(".js-overlay-close");

// * Hàm hiển thị overlay (thêm class 'open' vào overlay)
function showNavbarMenu() {
  overlay.classList.add("open");
}
// * Hàm ẩn overlay ( gỡ bỏ class 'open' ra overlay)
function hideNavbarMenu() {
  overlay.classList.remove("open");
}
// * nghe hành vi click vào navbarBtn
navbarBtn.addEventListener("click", showNavbarMenu);
// * nghe hành vi click vào overlayclose
overlayClose.addEventListener("click", hideNavbarMenu);

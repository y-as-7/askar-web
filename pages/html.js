const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

// learn html page
let listBtn = document.querySelector(".list-btn");
let htmlList = document.querySelector("#learn-here-con .con .list");

listBtn.addEventListener("click", () => {
  htmlList.classList.toggle("open");
});
// learn html page
let btn = document.querySelector(".list-btn");
let list = document.querySelector(" .list");
let icon = document.querySelector(".icon i");
btn.addEventListener("click", () => {
  list.classList.toggle("open");
  icon.classList.toggle("icon-closed");
    
});



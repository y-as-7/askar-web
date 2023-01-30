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


//custom coursers section 
// let curses = document.querySelectorAll("#courses .courses-cards .card");
// let para = document.querySelectorAll("#courses .courses-cards .card p");

// curses.forEach((e)=>{
//     e.onmouseover=()=>{
//         para.forEach((e)=>{
//             e.style.display="unset"
//         })
//     }
//     e.onmouseout = () => {
//         console.log(2);
//     };
// })

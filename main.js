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


const data = [
  {
    title: "HTML",
    info: "html is the basic of the web world so you have to learn it ",
    img: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
  },
  {
    title: "CSS",
    info: "soon",
    img: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png",
  },
  {
    title: "JS",
    info: "soon",
    img: "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png",
  },
];


//loop on my data on course section
let courses_contsiner = document.querySelector(".courses-cards");

for (let i = 0; i < data.length; i++) {
    let card = `
        <div class="card">
                <img src=${data[i].img} alt="">
                <div class="card-body">
                    <h1>${data[i].title}</h1>
                    <p>${data[i].info}</p>
                    <button>start tour</button>
                </div>
            </div>
    `;
    courses_contsiner.innerHTML+=card;
}


// projects filter 
let btns = document.querySelectorAll("#projects .buttons button");
let imgs = document.querySelectorAll("#projects .cards img");

for(let i=1 ; i<btns.length; i++){
    btns[i].addEventListener("click", FilterImg);
}

function setActiveBtn(e){
    btns.forEach(btn=>{
        btn.classList.remove("btn-clicked")
    });

    e.target.classList.add("btn-clicked")

}

function FilterImg(e){
    setActiveBtn(e)
    imgs.forEach(img=>{
        img.classList.remove("img-shrink");
        img.classList.add("img-expand")

        const imgType=parseInt(img.dataset.img)
        const btnType=parseInt(e.target.dataset.btn);

        if(imgType!==btnType){
            img.classList.remove("img-expand")
            img.classList.add("img-shrink")
        }
    });

}
btns[0].addEventListener("click",(e)=>{
    setActiveBtn(e);
    imgs.forEach(img=>{
        img.classList.remove("img-shrink");
        img.classList.add("img-expand");
    });
});

